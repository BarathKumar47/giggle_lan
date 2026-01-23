"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useMemo } from "react";

/**
 * GradientBlob Component
 * Ported from Framer module for local use.
 */
export default function GradientBlob({
    colors = ["#ff0d00ff", "#2f90ffff", "#FF2E97", "#00FFA3", "#FFD600"],
    blobCount = 5,
    animationSpeed = 1,
    blur = 40,
    opacity = 0.7,
    scale = 1,
}) {
    const filterId = useMemo(() => `goo-${Math.random().toString(36).substr(2, 9)}`, []);

    const blobs = useMemo(() => {
        return Array.from({ length: blobCount }, (_, i) => ({
            id: i,
            color: colors[i % colors.length],
            initialX: Math.random() * 100,
            initialY: Math.random() * 100,
            size: 100 + Math.random() * 150, // Slightly larger base than Framer for hero visibility
        }));
    }, [blobCount, colors]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                background: "transparent",
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                    <filter id={filterId}>
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation={blur}
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    filter: `url(#${filterId})`,
                    position: "relative",
                }}
            >
                {blobs.map((blob) => (
                    <Blob
                        key={blob.id}
                        color={blob.color}
                        initialX={blob.initialX}
                        initialY={blob.initialY}
                        size={blob.size}
                        speed={animationSpeed}
                        opacity={opacity}
                        scale={scale}
                    />
                ))}
            </div>
        </div>
    );
}

function Blob({ color, initialX, initialY, size, speed, opacity, scale }) {
    const x = useMotionValue(initialX);
    const y = useMotionValue(initialY);
    const rotate = useMotionValue(0);
    const scaleX = useMotionValue(1);
    const scaleY = useMotionValue(1);

    useEffect(() => {
        const duration = 20 / speed;

        const controls = [
            animate(x, [initialX, Math.random() * 100, initialX], {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
            }),
            animate(y, [initialY, Math.random() * 100, initialY], {
                duration: duration * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            }),
            animate(rotate, [0, 360], {
                duration: duration * 1.5,
                repeat: Infinity,
                ease: "linear",
            }),
            animate(scaleX, [1, 1.3, 0.8, 1], {
                duration: duration * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
            }),
            animate(scaleY, [1, 0.8, 1.3, 1], {
                duration: duration * 0.9,
                repeat: Infinity,
                ease: "easeInOut",
            }),
        ];

        return () => controls.forEach((control) => control.stop());
    }, [x, y, rotate, scaleX, scaleY, initialX, initialY, speed]);

    const left = useTransform(x, (value) => `${value}%`);
    const top = useTransform(y, (value) => `${value}%`);

    return (
        <motion.div
            style={{
                position: "absolute",
                left,
                top,
                width: size * scale,
                height: size * scale,
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                background: color,
                opacity: opacity,
                rotate,
                scaleX,
                scaleY,
                x: "-50%",
                y: "-50%",
                willChange: "transform",
            }}
        />
    );
}
