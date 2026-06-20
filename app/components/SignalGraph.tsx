import { cn } from "@/lib/utils";

interface SignalGraphProps {
  className?: string;
}

/**
 * Immersive navy wave field — subtle background texture for the hero.
 * Abstract flowing gradients inspired by editorial dark-band layouts.
 */
export function SignalGraph({ className }: SignalGraphProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#050b14]" />

      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 15% 85%, rgba(30, 64, 120, 0.45) 0%, transparent 55%),
            radial-gradient(ellipse 70% 55% at 85% 25%, rgba(20, 80, 140, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 55% 45% at 55% 60%, rgba(15, 50, 95, 0.3) 0%, transparent 45%),
            linear-gradient(165deg, #060f1c 0%, #0a1628 38%, #0d1f38 68%, #071018 100%)
          `,
        }}
      />

      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id="hero-wave-a" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a4a7a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0e2d52" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="hero-wave-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563a8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a1e38" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hero-wave-c" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#3b82c4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0f2744" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <path
          d="M-120 720 C 180 580, 320 820, 620 680 C 920 540, 1080 760, 1380 620 L 1560 900 L -120 900 Z"
          fill="url(#hero-wave-a)"
          className="hero-wave-drift-a"
        />
        <path
          d="M-80 780 C 240 640, 480 860, 780 720 C 1080 580, 1240 800, 1520 660 L 1560 900 L -80 900 Z"
          fill="url(#hero-wave-b)"
          opacity="0.7"
          className="hero-wave-drift-b"
        />
        <path
          d="M0 640 Q 360 520 720 600 T 1440 560 L 1440 900 L 0 900 Z"
          fill="url(#hero-wave-c)"
          opacity="0.5"
        />

        <path
          d="M-40 520 C 200 420, 420 580, 680 480 C 940 380, 1100 520, 1480 400"
          fill="none"
          stroke="rgba(100, 160, 220, 0.08)"
          strokeWidth="1.5"
        />
        <path
          d="M80 380 C 320 280, 560 440, 820 340 C 1080 240, 1260 360, 1440 300"
          fill="none"
          stroke="rgba(80, 140, 200, 0.06)"
          strokeWidth="1"
        />
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5, 11, 20, 0.92) 0%, rgba(5, 11, 20, 0.35) 42%, rgba(5, 11, 20, 0.55) 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

export default SignalGraph;
