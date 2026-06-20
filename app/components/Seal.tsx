import { cn } from "@/lib/utils";

interface SealProps {
  className?: string;
  /** Ring text — repeated around the circle */
  label?: string;
  tone?: "ink" | "paper";
  spin?: boolean;
}

/**
 * Governance sign-off seal — the brand's signature mark.
 * A circular stamp echoing "the regulators sign off on" promise.
 */
export function Seal({
  className,
  label = "APPROVED FOR PRODUCTION \u00B7 GOVERNED \u0026 ACCOUNTABLE \u00B7 ",
  tone = "ink",
  spin = true,
}: SealProps) {
  const stroke = tone === "paper" ? "var(--on-obsidian)" : "var(--accent)";
  const text = tone === "paper" ? "var(--on-obsidian-soft)" : "var(--accent)";
  const mark = tone === "paper" ? "var(--on-obsidian)" : "var(--accent)";

  return (
    <span
      className={cn("relative inline-flex items-center justify-center", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        role="presentation"
        focusable="false"
      >
        <defs>
          <path
            id="seal-ring"
            d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>

        {/* outer + inner rings */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          opacity="0.55"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
        />

        {/* rotating ring text */}
        <g className={spin ? "seal-rotate" : undefined} style={{ transformOrigin: "100px 100px" }}>
          <text
            fill={text}
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "11px",
              letterSpacing: "2.5px",
              fontWeight: 500,
            }}
          >
            <textPath href="#seal-ring" startOffset="0">
              {label}
              {label}
            </textPath>
          </text>
        </g>

        {/* center mark — checkmark in a ticked frame */}
        <g stroke={mark} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 78 100 L 94 116 L 124 84" />
        </g>
        <circle cx="100" cy="100" r="36" fill="none" stroke={mark} strokeWidth="1" opacity="0.4" />
      </svg>
    </span>
  );
}

export default Seal;
