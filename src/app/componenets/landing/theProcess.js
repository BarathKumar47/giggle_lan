"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ProcessCard = ({ number, title, description, color, accentColor, anchor, rotation }) => {
    return (
        <Box
            sx={{
                position: "absolute",
                left: `${anchor.x}%`,
                top: `${anchor.y}%`,
                transform: "translate(-50%, -50%)",
                width: "1px", // Minimal size, acts as zero-point anchor
                height: "1px",
                zIndex: 2,
                pointerEvents: "visible", // Container itself doesn't block but children do
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* The Black Hole (Anchor Hole) - Centered exactly on the anchor coordinates */}
            <Box
                sx={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#000000",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "50%",
                    zIndex: 4,
                    position: "absolute",
                    border: "2px solid rgba(255,255,255,0.1)",
                }}
            />

            {/* The Card Body - Hangs from the anchor point */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-27px", // Offset so hole center (at 0,0) is 27px from the top of the body
                    width: { xs: "280px", sm: "320px", md: "400px" },
                    transform: { xs: "translateY(0)", md: `rotate(${rotation}deg)` },
                    transformOrigin: "50% 27px", // Rotate exactly around the hole center
                    pointerEvents: "auto",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box
                        sx={{
                            background: "rgba(255, 255, 255, 0.7)",
                            borderRadius: "20px",
                            padding: "90px 25px 25px 25px", // Original padding
                            position: "relative",
                            border: "1px solid #A5A5A5",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                                transform: "translateY(-8px) scale(1.02)",
                                boxShadow: "0px 10px 40px rgba(165, 165, 165, 0.4)",
                            },
                        }}
                    >
                        {/* Inner Card Body */}
                        <Box
                            sx={{
                                background: "#474747",
                                borderRadius: "16px",
                                padding: "24px 28px",
                                minHeight: { md: "280px" },
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid #A5A5A5",
                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: { xs: "32px", md: "45px" },
                                    fontWeight: 700,
                                    color: color,
                                    mb: 1,
                                }}
                            >
                                {number}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: { xs: "24px", md: "32px" },
                                    fontWeight: 600,
                                    color: accentColor,
                                    mb: 2,
                                    lineHeight: 1.1,
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "var(--font-inter)",
                                    fontSize: { xs: "14px", md: "16px" },
                                    fontWeight: 400,
                                    color: "#E7E7E7",
                                    opacity: 0.9,
                                    lineHeight: 1.6,
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};

export default function TheProcess() {
    const anchors = [
        { x: 72, y: 15, rotation: -12 },
        { x: 28, y: 32, rotation: 10 },
        { x: 68, y: 50, rotation: -15 },
        { x: 32, y: 68, rotation: 12 },
        { x: 65, y: 85, rotation: -8 },
    ];

    const steps = [
        {
            number: "01",
            title: "Define",
            color: "#FFC4B2",
            accentColor: "#E65930",
            description: "We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.",
        },
        {
            number: "02",
            title: "Design",
            color: "#FFE8AF",
            accentColor: "#E69A30",
            description: "We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.",
        },
        {
            number: "03",
            title: "Collaborate",
            color: "#EFBDFF",
            accentColor: "#D34BFF",
            description: "We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.",
        },
        {
            number: "04",
            title: "Test",
            color: "#B9B9FF",
            accentColor: "#5A5AFF",
            description: "We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.",
        },
        {
            number: "05",
            title: "Deploy",
            color: "#C6EFFF",
            accentColor: "#67D4FF",
            description: "We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.",
        },
    ];

    // Create path string from anchors
    // Move to first, then curve through others
    const pathD = anchors.reduce((acc, anchor, i) => {
        if (i === 0) return `M ${anchor.x} ${anchor.y}`;
        const prev = anchors[i - 1];
        // Simple cubic bezier: point to point with consistent curvature
        const cp1x = i % 2 === 0 ? prev.x + 20 : prev.x - 20;
        const cp2x = i % 2 === 0 ? anchor.x + 20 : anchor.x - 20;
        return `${acc} C ${cp1x} ${prev.y + 5}, ${cp2x} ${anchor.y - 5}, ${anchor.x} ${anchor.y}`;
    }, "");

    return (
        <Box
            sx={{
                width: "100%",
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "60px 20px", md: "80px 32px" },
                position: "relative",
            }}
        >
            {/* Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: "80px", zIndex: 10 }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "12px 24px",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "50px",
                        width: "fit-content",
                        margin: "0 auto 12px auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "10px",
                            fontWeight: 600,
                            color: "#E7E7E7",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        THE PROCESS
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontFamily: "var(--font-roboto)",
                        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: 1.1,
                    }}
                >
                    Built to be
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: { xs: "1.8rem", sm: "3rem", md: "4rem" },
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#ffffff",
                        lineHeight: 1.1,
                    }}
                >
                    efficient.
                </Typography>
            </motion.div>

            {/* Unified SVG and Cards Container */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1400px",
                    height: { xs: "2200px", md: "2400px", lg: "2800px" },
                    display: { xs: "none", sm: "block" }, // Hide coordinate system on small mobile, use vertical stack instead
                }}
            >
                {/* SVG Rope */}
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
                >
                    <motion.path
                        d={pathD}
                        stroke="#858585"
                        strokeWidth="0.2"
                        strokeDasharray="1 2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                </svg>

                {/* Absolutely Positioned Cards */}
                {steps.map((step, index) => (
                    <ProcessCard
                        key={index}
                        {...step}
                        anchor={anchors[index]}
                        rotation={anchors[index].rotation}
                    />
                ))}
            </Box>

            {/* Mobile Vertical Stack (Below 600px) */}
            <Box
                sx={{
                    display: { xs: "flex", sm: "none" },
                    flexDirection: "column",
                    gap: "24px",
                    width: "100%",
                    zIndex: 2,
                }}
            >
                {steps.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            background: "rgba(255, 255, 255, 0.7)",
                            borderRadius: "20px",
                            padding: "16px",
                            border: "1px solid #A5A5A5",
                        }}
                    >
                        <Box
                            sx={{
                                background: "#474747",
                                borderRadius: "16px",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                border: "1px solid #A5A5A5",
                            }}
                        >
                            <Typography sx={{ color: step.color, fontWeight: 700, fontSize: "24px" }}>{step.number}</Typography>
                            <Typography sx={{ color: step.accentColor, fontWeight: 600, fontSize: "20px", mb: 1 }}>{step.title}</Typography>
                            <Typography sx={{ color: "#E7E7E7", fontSize: "14px", lineHeight: 1.6 }}>{step.description}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
