"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";

/**
 * Scroll-scrubbed video hero with layered parallax (fake-3D depth).
 *
 * Layers, staggered by speed/Z so the flythrough reads as moving through color:
 *   0 video (depth itself, slowest)  ·  1 pigment mid-layer  ·
 *   2 CHROMA headline (fastest, scales + flies past)  ·  3 foreground wisps
 *
 * Modes (resolved once on mount):
 *   scrub  — desktop pointer: scroll position drives video.currentTime (rAF + lerp)
 *   loop   — touch/small: muted autoplay loop, reduced parallax (still has depth)
 *   static — prefers-reduced-motion: poster frame, no scrub, no parallax
 */
export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const midRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const wisp1Ref = useRef<HTMLDivElement | null>(null);
  const wisp2Ref = useRef<HTMLDivElement | null>(null);
  const cueRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    const mode: "scrub" | "loop" | "static" = reduce
      ? "static"
      : coarse
        ? "loop"
        : "scrub";

    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const amp = mode === "scrub" ? 1 : 0.55; // gentler parallax on touch

    let duration = 10;
    const onMeta = () => {
      duration = video.duration || 10;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    // --- mode setup -------------------------------------------------------
    if (mode === "loop") {
      video.src = "/hero-bloom.mp4";
      video.loop = true;
      video.muted = true;
      video.load();
      const tryPlay = () => video.play().catch(() => {});
      if (video.readyState >= 2) tryPlay();
      else video.addEventListener("canplay", tryPlay, { once: true });
    } else {
      // scrub + static both use the all-keyframe encode, paused.
      video.src = "/hero-bloom-scrub.mp4";
      video.loop = false;
      video.muted = true;
      video.load();
      if (mode === "static") {
        const setFrame = () => {
          try {
            video.currentTime = (video.duration || 10) * 0.7;
          } catch {
            /* noop */
          }
        };
        if (video.readyState >= 1) setFrame();
        else video.addEventListener("loadeddata", setFrame, { once: true });
      } else {
        video.pause();
      }
    }

    // Static: place layers once, no rAF.
    if (mode === "static") {
      if (headlineRef.current) {
        headlineRef.current.style.opacity = "1";
        headlineRef.current.style.transform = "none";
      }
      if (taglineRef.current) taglineRef.current.style.opacity = "1";
      video.addEventListener("loadedmetadata", onMeta);
      return () => video.removeEventListener("loadedmetadata", onMeta);
    }

    // --- rAF loop ---------------------------------------------------------
    let rafId = 0;
    let displayTime = 0;
    const vh = () => window.innerHeight;

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - vh();
      const p = clamp01(-rect.top / (total || 1));

      // Headline (layer 2 — fastest): rises, scales 1→1.18, fades out past 0.62
      if (headlineRef.current) {
        const y = -p * vh() * 0.6 * amp;
        const scale = 1 + p * 0.18 * amp;
        // Present on load, resolves quickly as you begin to scroll (emerges from color).
        const appear = clamp01(0.55 + p / 0.12);
        const leave = p < 0.62 ? 1 : clamp01(1 - (p - 0.62) / 0.16);
        headlineRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
        headlineRef.current.style.opacity = String(appear * leave);
      }

      // Tagline: present roughly 0.30–0.78
      if (taglineRef.current) {
        let o = 0;
        if (p > 0.3) o = clamp01((p - 0.3) / 0.12);
        if (p > 0.66) o = clamp01(1 - (p - 0.66) / 0.12);
        taglineRef.current.style.opacity = String(o);
      }

      // Mid pigment layer (layer 1 — slower): drifts + scales, dissipates
      if (midRef.current) {
        midRef.current.style.transform = `translate3d(0, ${-p * vh() * 0.22 * amp}px, 0) scale(${1 + p * 0.35 * amp})`;
        midRef.current.style.opacity = String(0.55 * (1 - p * 0.6));
      }

      // Foreground wisps (layer 3 — fastest, pass to the sides as we fly past)
      if (wisp1Ref.current) {
        wisp1Ref.current.style.transform = `translate3d(${-p * 36 * amp}vw, ${-p * vh() * 0.42 * amp}px, 0) scale(${1 + p * 0.7 * amp})`;
        wisp1Ref.current.style.opacity = String(clamp01(0.7 - p * 0.5));
      }
      if (wisp2Ref.current) {
        wisp2Ref.current.style.transform = `translate3d(${p * 38 * amp}vw, ${-p * vh() * 0.36 * amp}px, 0) scale(${1 + p * 0.6 * amp})`;
        wisp2Ref.current.style.opacity = String(clamp01(0.6 - p * 0.45));
      }

      // Scroll cue fades quickly as soon as motion starts
      if (cueRef.current) {
        cueRef.current.style.opacity = String(clamp01(1 - p / 0.06));
      }

      // Video scrubbing (scrub mode only): lerp toward target for smoothness
      if (mode === "scrub" && duration) {
        const target = p * (duration - 0.05);
        displayTime = lerp(displayTime, target, 0.12);
        if (Math.abs(displayTime - video.currentTime) > 0.01) {
          try {
            video.currentTime = displayTime;
          } catch {
            /* seek can throw mid-load */
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="CHROMA — Mara Voss"
      className="relative h-[260vh]"
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-bg">
        {/* Layer 0 — flythrough video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/hero-poster.jpg"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
        />

        {/* Vignette + legibility gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 45%, transparent 30%, rgba(10,10,12,0.55) 100%), linear-gradient(to bottom, rgba(10,10,12,0.35) 0%, transparent 22%, transparent 60%, rgba(10,10,12,0.85) 100%)",
          }}
        />

        {/* Layer 1 — pigment mid-layer (indigo + gold haze) */}
        <div
          ref={midRef}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 50% at 30% 35%, rgba(66,84,224,0.22), transparent 70%), radial-gradient(45% 55% at 72% 65%, rgba(201,164,92,0.16), transparent 70%)",
            filter: "blur(30px)",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 3 — foreground wisps (very soft, pass by) */}
        <div
          ref={wisp1Ref}
          className="pointer-events-none absolute -left-[10%] top-[20%] h-[60vh] w-[55vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,84,224,0.35), transparent 65%)",
            filter: "blur(60px)",
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={wisp2Ref}
          className="pointer-events-none absolute -right-[8%] top-[45%] h-[55vh] w-[50vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,164,92,0.30), transparent 65%)",
            filter: "blur(64px)",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 2 — headline */}
        <div
          ref={headlineRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{ willChange: "transform, opacity", opacity: 0.55 }}
        >
          <h1 className="font-display text-[clamp(3.5rem,16vw,13rem)] font-bold leading-[0.9] tracking-[-0.03em] text-text">
            CHROMA
          </h1>
          <p
            ref={taglineRef}
            className="mt-6 font-display text-[clamp(1.1rem,2.6vw,1.9rem)] font-medium tracking-tight text-text/90"
            style={{ opacity: 0 }}
          >
            Farbe als Sprache<span className="text-gold">.</span>
          </p>
        </div>

        {/* Scroll cue */}
        <div
          ref={cueRef}
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">
            Scrollen
          </span>
          <Icon name="arrow-down" size={18} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
