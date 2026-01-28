"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";

export default function WorkRules() {
    const features = [
        {
            icon: <GroupsOutlinedIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
            title: "Unified Workspace",
            description: "Everything you need in one place. Chats, files, invoices, and timelines synchronized perfectly. Everything you need in one place. Chats, files, invoices, and timelines synchronized perfectly. Everything you need in one place. Chats, files, invoices, and timelines synchronized perfectly. Everything you need in one place. Chats, files, invoices, and timelines synchronized perfectly. Everything you need in one place. Chats, files, invoices, and timelines synchronized perfectly. Everything you need in one place. ",
            gridArea: "left",
            customWidth: { xs: "100%", md: "100%", lg: "350px" },
            customHeight: { xs: "auto", md: "500px", lg: "680px" },
            customStyle: {
                background: "#1717176c",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: { xs: "20px", md: "60px" },
                boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.09)",
                iconBackground: "rgba(255, 255, 255, 0.1)",
                iconColor: "#E65930",
                titleColor: "#ffffff",
                descriptionColor: "#E7E7E7"
            }
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
            title: "Escrow & Security",
            description: "Payments held safely until milestones are met. Trust is built into the code, not just the contract.",
            gridArea: "topRight",
            customWidth: { xs: "100%", md: "100%", lg: "350px" },
            customHeight: { xs: "auto", md: "240px", lg: "320px" },
            customStyle: {
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: { xs: "20px", md: "60px" },
                boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.4)",
                iconBackground: "#FFFFFF",
                iconColor: "#CD04AA",
                titleColor: "#000000",
                descriptionColor: "#555555"
            }
        },
        {
            icon: <BoltIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
            title: "Instant Flow",
            description: "Zero-friction onboarding. Start a project in seconds with smart templates and AI assists.",
            gridArea: "bottomWide",
            customWidth: { xs: "100%", md: "100%", lg: "350px" },
            customHeight: { xs: "auto", md: "240px", lg: "320px" },
            customStyle: {
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(251, 146, 60, 0.3)",
                borderRadius: { xs: "20px", md: "60px" },
                boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.4)",
                iconBackground: "#FFFFFF",
                iconColor: "#4E9FFF",
                titleColor: "#000000",
                descriptionColor: "#555555"
            }
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 24, color: "#ffffff" }} />,
            title: "Advanced Security",
            description: "Payments held safely until milestones are met. Trust is built into the code, not just the contract. Payments held safely until milestones are met. Trust is built into the code, not just the contract.Payments held safely until milestones are met. Trust is built into the code, not just the contract.",
            gridArea: "middleRight",
            customWidth: { xs: "100%", md: "100%", lg: "746px" },
            customHeight: { xs: "auto", md: "240px", lg: "320px" },
            customStyle: {
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: { xs: "20px", md: "60px" },
                boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.4)",
                iconBackground: "#FFFFFF",
                iconColor: "#CD04AA",
                titleColor: "#000000",
                descriptionColor: "#555555"
            }
        },

    ];

    return (
        <Box
            sx={{
                width: "100%",
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "40px 32px", md: "60px 64px" },
                position: "relative",
            }}
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 24px",
                        background: "rgba(158, 158, 158, 0.2)",
                        backdropFilter: "blur(15px)",
                        borderRadius: "50px",
                        width: "fit-content",
                        margin: "0 auto 32px auto",
                        position: "relative",
                        // The "Glassient" Border Effect
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "50px",
                            padding: "1px", // Border weight
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.3) 70%)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        },
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "10px",
                            fontWeight: 500,
                            color: "#ffffffff",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            textAlign: "center",
                            opacity: .8,
                        }}
                    >
                        The platform
                    </Typography>
                </Box>

                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "var(--font-inter)",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "46px" },
                        fontWeight: 500,
                        color: "#ffffff",
                        textAlign: "center",
                        lineHeight: 1.1,
                        marginBottom: "100px",
                    }}
                >
                    Your Work
                    <br />
                    <Box
                        component="span"
                        sx={{
                            fontFamily: "var(--font-playfair), serif",
                            fontStyle: "italic",
                            fontWeight: 400,
                            fontSize: "46px",
                            lineHeight: "52px",
                        }}
                    >
                        Your Rules
                    </Box>
                </Typography>
            </motion.div>

            {/* Asymmetrical Card Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr", lg: "1fr 1fr 1fr" },
                    gridTemplateRows: { xs: "auto", md: "auto auto", lg: "auto" },
                    gridTemplateAreas: {
                        xs: `
                            "left"
                            "topRight"
                            "middleRight"
                            "bottomWide"
                        `,
                        md: `
                            "left topRight"
                            "left middleRight"
                            "bottomWide bottomWide"
                        `,
                        lg: `
                            "left topRight bottomWide"
                            "left middleRight middleRight"
                        `
                    },
                    rowGap: { xs: "8px", md: "12px", lg: "40px" },   // vertical gap
                    columnGap: { xs: "16px", md: "20px", lg: "5px" }, // horizontal gap

                    minWidth: { xs: "100%", md: "1180px" },
                    maxWidth: { xs: "100%", md: "1000px" },
                    width: "100%",
                }}
            >
                {features.map((feature, index) => {
                    // Extract color for the gradient (default to white if not specific)
                    const gradientColors = [
                        "#ffffff", // Unified Workspace
                        "#3b82f6", // Escrow (Blue-ish)
                        "#fb923c", // Instant Flow (Orange)
                        "#22c55e"  // Advanced Security (Green)
                    ];
                    const activeColor = gradientColors[index % gradientColors.length];

                    // Determine animation direction based on index/layout
                    let initialAnim = { opacity: 0, y: 50 };
                    let animateTarget = { opacity: 1, x: 0, y: 0 };

                    if (index === 0) {
                        // Left Card -> Comes from Left (Standard)
                        initialAnim = { opacity: 0, x: -100, y: 0 };
                        animateTarget = { opacity: 1, x: 0, y: 0 };
                    } else if (index === 1 || index === 2) {
                        // Top cards -> Come from high up, overshoot down hard
                        initialAnim = { opacity: 0, y: -200, x: 0 };
                        animateTarget = {
                            opacity: 1,
                            x: 0,
                            y: 0
                        };
                    } else if (index === 3) {
                        // Bottom card -> Comes from right
                        initialAnim = { opacity: 0, x: 100, y: 0 };
                        animateTarget = {
                            opacity: 1,
                            x: 0,
                            y: 0
                        };
                    }

                    return (
                        <motion.div
                            key={index}
                            initial={initialAnim}
                            whileInView={animateTarget}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier
                                delay: index === 0 ? 0.6 : index === 1 ? 0.9 : index === 2 ? 1.1 : 0.2
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            style={{ gridArea: feature.gridArea }}
                        >
                            <Box
                                sx={{
                                    backdropFilter: "blur(0px)",
                                    WebkitBackdropFilter: "blur(20px)",
                                    transform: "translateZ(0)",
                                    willChange: "transform, opacity",
                                    padding: { xs: "24px", md: "32px" },
                                    width: feature.customWidth,
                                    height: feature.customHeight,
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "hidden",
                                    background: feature.customStyle.background,
                                    // background: "rgba(255, 255, 255, 0.08)",
                                    // border: feature.customStyle.border, // Removed static border for animated one
                                    borderRadius: feature.customStyle.borderRadius,
                                    boxShadow: feature.customStyle.boxShadow,
                                    "&:hover": {
                                        background: feature.customStyle.background === "#000000" ? "#111111" : feature.customStyle.background.replace("0.9", "0.95").replace("0.1", "0.15").replace("0.08", "0.12"),
                                        boxShadow: feature.customStyle.boxShadow.replace("0.3", "0.5").replace("0.4", "0.6"),
                                        transform: "translateY(-4px) scale(1.02)",
                                    },
                                }}
                            >
                                {/* Icon Container */}
                                <Box
                                    sx={{
                                        marginBottom: "24px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: { xs: "72px", md: "50px" },
                                        height: { xs: "72px", md: "50px" },
                                        minWidth: { md: "50px" },
                                        minHeight: { md: "50px" },
                                        background: feature.customStyle.iconBackground,
                                        borderRadius: { xs: "18px", md: "12px" },
                                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {React.cloneElement(feature.icon, {
                                        sx: { fontSize: feature.icon.props.sx.fontSize, color: feature.customStyle.iconColor }
                                    })}
                                </Box>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "21px", md: "27px" },
                                        fontWeight: 500,
                                        color: feature.customStyle.titleColor || "#ffffff",
                                        marginBottom: "16px",
                                        lineHeight: '40px',
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {feature.title}
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "14px", md: "17px" },
                                        fontWeight: 250,
                                        color: feature.customStyle.descriptionColor || "rgba(0, 0, 0, 0.7)",
                                        lineHeight: '30px',
                                        flex: 1,
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
}
