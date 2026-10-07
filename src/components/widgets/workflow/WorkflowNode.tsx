"use client";

import React from "react";

export interface WorkflowNodeProps {
  x: number;
  y: number;
  label: string;
  badgeWidth?: number;
  glowColor?: string;
  haloRadius?: number;
  hasOrbital?: boolean;
  orbitalDuration?: string;
  icon: "webhook" | "server" | "database" | "mail";
  iconStrokeColor?: string;
}

export const WorkflowNode: React.FC<WorkflowNodeProps> = ({
  x,
  y,
  label,
  badgeWidth = 140,
  glowColor = "#00F0FF",
  haloRadius = 32,
  hasOrbital = false,
  orbitalDuration = "16s",
  icon,
  iconStrokeColor = "#00F0FF",
}) => {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Ambient Halo */}
      <circle cx="0" cy="0" r={haloRadius} fill={glowColor} opacity="0.08" />

      {/* Optional Orbital Ring */}
      {hasOrbital && (
        <circle
          cx="0"
          cy="0"
          r={haloRadius + 2}
          fill="none"
          stroke={glowColor}
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur={orbitalDuration}
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Icon Box */}
      <rect
        x="-25"
        y="-25"
        width="50"
        height="50"
        rx="14"
        fill="#141824"
        stroke={glowColor}
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />

      {/* Icon Shapes */}
      {icon === "webhook" && (
        <>
          <path
            d="M-6 -6 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M6 6 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0 M-6 6 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0"
            fill="none"
            stroke={iconStrokeColor}
            strokeWidth="1.8"
          />
          <path d="M-3 -4 L3 4 M-3 4 L3 -4" stroke={iconStrokeColor} strokeWidth="1.5" strokeOpacity="0.7" />
        </>
      )}

      {icon === "server" && (
        <>
          <rect x="-10" y="-10" width="20" height="8" rx="2" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
          <rect x="-10" y="2" width="20" height="8" rx="2" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
          <circle cx="-5" cy="-6" r="1" fill={iconStrokeColor} />
          <circle cx="-5" cy="6" r="1" fill={iconStrokeColor} />
        </>
      )}

      {icon === "database" && (
        <>
          <ellipse cx="0" cy="-6" rx="8" ry="3" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
          <path d="M-8 -6 v6 c0 1.6 3.6 3 8 3 s8 -1.4 8 -3 v-6" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
          <path d="M-8 0 v6 c0 1.6 3.6 3 8 3 s8 -1.4 8 -3 v-6" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
        </>
      )}

      {icon === "mail" && (
        <>
          <rect x="-9" y="-6" width="18" height="12" rx="2" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
          <path d="M-9 -4 L0 2 L9 -4" fill="none" stroke={iconStrokeColor} strokeWidth="1.5" />
        </>
      )}

      {/* Label Badge */}
      <rect
        x={-badgeWidth / 2}
        y="34"
        width={badgeWidth}
        height="24"
        rx="6"
        fill="#0A0C10"
        stroke={hasOrbital ? "rgba(212,255,0,0.3)" : "rgba(255,255,255,0.12)"}
        strokeWidth="1"
      />
      <text
        x="0"
        y="50"
        fill={hasOrbital ? "#D4FF00" : "#E2E8F0"}
        fontSize="10.5"
        fontFamily="monospace"
        textAnchor="middle"
        fontWeight="bold"
      >
        {label}
      </text>
    </g>
  );
};
