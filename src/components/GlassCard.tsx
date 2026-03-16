import React from "react";

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`relative ${className}`}
            style={{
                background: "rgba(255, 255, 255, 0.01)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
            }}
        >
            {children}
        </div>
    );
}