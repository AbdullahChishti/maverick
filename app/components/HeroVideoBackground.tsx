"use client";

import { useEffect, useState } from "react";
import { SignalGraph } from "./SignalGraph";

export function HeroVideoBackground() {
  const [useFallback, setUseFallback] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showFallback = prefersReducedMotion || useFallback;

  return (
    <div
      className="hero-video-bg pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {showFallback ? (
        <SignalGraph className="signal-graph-fallback" />
      ) : (
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-wave-poster.jpg"
          onError={() => setUseFallback(true)}
        >
          <source src="/hero-wave.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default HeroVideoBackground;
