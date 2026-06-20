import { cn } from "@/lib/utils";

interface SignalGraphProps {
  className?: string;
}

/**
 * Abstract governance pipeline — visual metaphor for
 * architecture review → production sign-off.
 */
export function SignalGraph({ className }: SignalGraphProps) {
  return (
    <div
      className={cn("relative aspect-square w-full max-w-md", className)}
      aria-hidden="true"
    >
      {/* ambient glow */}
      <div
        className="absolute inset-[15%] rounded-full blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />

      <svg
        viewBox="0 0 400 400"
        className="signal-drift relative h-full w-full"
        role="presentation"
        focusable="false"
      >
        {/* outer ring */}
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="var(--rule)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="var(--rule-strong)"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.6"
        />

        {/* signal path */}
        <path
          d="M 80 280 Q 120 180 200 160 Q 280 140 320 80"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="200"
          className="animate-line-draw"
          style={{ strokeDashoffset: 0 }}
        />

        {/* nodes */}
        {[
          { cx: 80, cy: 280, label: "Review", active: false },
          { cx: 200, cy: 160, label: "Build", active: false },
          { cx: 320, cy: 80, label: "Live", active: true },
        ].map((node) => (
          <g key={node.label}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.active ? 14 : 10}
              fill={node.active ? "var(--accent)" : "var(--surface-raised)"}
              stroke={node.active ? "var(--accent-bright)" : "var(--rule-strong)"}
              strokeWidth="2"
            />
            {node.active && (
              <circle
                cx={node.cx}
                cy={node.cy}
                r="22"
                fill="none"
                stroke="var(--accent-bright)"
                strokeWidth="1"
                opacity="0.4"
                className="signal-pulse"
              />
            )}
            <text
              x={node.cx}
              y={node.cy + (node.active ? 36 : 32)}
              textAnchor="middle"
              fill={node.active ? "var(--accent-deep)" : "var(--ink-muted)"}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* center checkmark */}
        <g
          transform="translate(200, 200)"
          stroke="var(--accent-deep)"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        >
          <path d="M -18 0 L -6 12 L 22 -16" />
        </g>
      </svg>
    </div>
  );
}

export default SignalGraph;
