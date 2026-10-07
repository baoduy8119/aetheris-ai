"use client";

import React from "react";

export interface WorkflowConnectionProps {
  id: string;
  path: string;
  gradientId: string;
  packetColor?: string;
  duration?: string;
  pulseGlowId?: string;
  isAnimated?: boolean;
}

export const WorkflowConnections: React.FC<{
  connections: WorkflowConnectionProps[];
  mounted?: boolean;
}> = ({ connections, mounted = true }) => {
  return (
    <>
      {/* Base Static Wire Tracks */}
      {connections.map((conn) => (
        <path
          key={`base-${conn.id}`}
          d={conn.path}
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2"
        />
      ))}

      {/* Active Gradient Trajectory Lines */}
      {connections.map((conn) => (
        <path
          key={`grad-${conn.id}`}
          d={conn.path}
          stroke={`url(#${conn.gradientId})`}
          strokeWidth="2.5"
          strokeDasharray="6 6"
        />
      ))}

      {/* Animated Traveling Data Packets */}
      {mounted &&
        connections.map((conn) => {
          if (conn.isAnimated === false) return null;
          const dur = conn.duration || "2.4s";
          const color = conn.packetColor || "#00F0FF";
          return (
            <circle
              key={`pulse-${conn.id}`}
              r="4.5"
              fill={color}
              filter={conn.pulseGlowId ? `url(#${conn.pulseGlowId})` : undefined}
            >
              <animateMotion dur={dur} repeatCount="indefinite" path={conn.path} />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur={dur}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
    </>
  );
};
