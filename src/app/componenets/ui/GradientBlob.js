"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(0, 0, 0)", // Black
    gradientBackgroundEnd = "rgb(0, 0, 0)",   // Black
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "100, 220, 255",
    fourthColor = "200, 50, 50",
    fifthColor = "180, 180, 50",
    pointerColor = "140, 100, 255",
    size = "80%",
    blendingValue = "hard-light",
    children,
    interactive = true,
}) => {
    const interactiveRef = useRef(null);
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

        document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
        document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        const animationId = requestAnimationFrame(move);
        return () => cancelAnimationFrame(animationId);
    }, [curX, curY, tgX, tgY]);

    const handleMouseMove = (event) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    const commonStyle = {
        position: 'absolute',
        mixBlendMode: 'var(--blending-value)',
        width: 'var(--size)',
        height: 'var(--size)',
        top: 'calc(50% - var(--size) / 2)',
        left: 'calc(50% - var(--size) / 2)',
        opacity: 0.8,
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
                background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
            }}
        >
            <svg style={{ display: 'none' }}>
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>{children}</div>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    filter: isSafari ? 'blur(80px)' : 'url(#blurMe) blur(40px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                {/* First Blob: moveVertical */}
                <motion.div
                    animate={{
                        y: ["-50%", "50%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        ...commonStyle,
                        background: `radial-gradient(circle at center, rgba(${firstColor}, 0.8) 0, rgba(${firstColor}, 0) 50%) no-repeat`,
                        transformOrigin: 'center center',
                    }}
                />

                {/* Second Blob: moveInCircle (Reverse) */}
                <motion.div
                    animate={{
                        rotate: [360, 0],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{
                        ...commonStyle,
                        background: `radial-gradient(circle at center, rgba(${secondColor}, 0.8) 0, rgba(${secondColor}, 0) 50%) no-repeat`,
                        transformOrigin: 'calc(50% - 400px)',
                    }}
                />

                {/* Third Blob: moveInCircle */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{
                        ...commonStyle,
                        background: `radial-gradient(circle at center, rgba(${thirdColor}, 0.8) 0, rgba(${thirdColor}, 0) 50%) no-repeat`,
                        transformOrigin: 'calc(50% + 400px)',
                    }}
                />

                {/* Fourth Blob: moveHorizontal */}
                <motion.div
                    animate={{
                        x: ["-50%", "50%", "-50%"],
                        y: ["-10%", "10%", "-10%"],
                    }}
                    transition={{
                        duration: 40,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        ...commonStyle,
                        background: `radial-gradient(circle at center, rgba(${fourthColor}, 0.8) 0, rgba(${fourthColor}, 0) 50%) no-repeat`,
                        transformOrigin: 'calc(50% - 200px)',
                        opacity: 0.7,
                    }}
                />

                {/* Fifth Blob: moveInCircle */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 20,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        ...commonStyle,
                        background: `radial-gradient(circle at center, rgba(${fifthColor}, 0.8) 0, rgba(${fifthColor}, 0) 50%) no-repeat`,
                        transformOrigin: 'calc(50% - 800px) calc(50% + 800px)',
                    }}
                />

                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        style={{
                            position: 'absolute',
                            background: `radial-gradient(circle at center, rgba(${pointerColor}, 0.8) 0, rgba(${pointerColor}, 0) 50%) no-repeat`,
                            mixBlendMode: blendingValue,
                            width: '100%',
                            height: '100%',
                            top: '-50%',
                            left: '-50%',
                            opacity: 0.7,
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default BackgroundGradientAnimation;
