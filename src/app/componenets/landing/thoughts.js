"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Typography from "@mui/material/Typography";

const Thoughts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const resumeTimeoutRef = useRef(null);

    // Handle card click - stop auto-rotation and show clicked card
    const handleCardClick = useCallback((index) => {
        // Clear any existing timers
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
        }

        // Set the clicked card as active
        setActiveIndex(index);
        setIsPaused(true);

        // Resume auto-rotation after 10 seconds of inactivity
        resumeTimeoutRef.current = setTimeout(() => {
            setIsPaused(false);
        }, 10000);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % 3);
            }, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    const content = [
        {
            tag: 'Case study',
            Dateandtime: '5 min read | Oct 24, 2023',
            title: "The Future of Remote Collaboration",
            description: "Discover how the changing landscape of digital work is affecting freelancer rates and client expectations globally.",
            image: "/thoughts-img-1.webp"
        },
        {
            tag: 'Team Notes',
            Dateandtime: '5 min read | Oct 24, 2023',
            title: "Trust in the Gig Economy",
            description: "Discover how the changing landscape of digital work is affecting freelancer rates and client expectations globally.",
            image: "/thoughts-img-2.webp"
        },
        {
            tag: 'Design',
            Dateandtime: '5 min read | Oct 24, 2023',
            title: "Designing for Asynchronous Teams",
            description: "Discover how the changing landscape of digital work is affecting freelancer rates and client expectations globally.",
            image: "/thoughts-img-3.webp"
        }
    ];

    return (
        <Box
            sx={{
                width: "100%",
                background: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "60px 20px", md: "80px 32px" },
                position: "relative",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                    textAlign: "center",
                    marginBottom: "60px",
                }}
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
                        marginBottom: "12px",
                        width: "fit-content",
                        margin: "0 auto 12px auto",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: { xs: "0.75rem", md: "10px" },
                            fontWeight: 600,
                            color: "#E7E7E7",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            textAlign: "center",
                        }}
                    >
                        JOURNAL
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontFamily: "var(--font-roboto)",
                        fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        marginBottom: "0px",
                        textAlign: "center",
                    }}
                >
                    Thoughts &
                </Typography>

                <Typography
                    sx={{

                        fontFamily: "var(--font-playfair)", fontStyle: 'italic',
                        fontSize: { xs: "1.8rem", sm: "3rem", md: "3rem" },
                        fontWeight: 400,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        textAlign: "center",
                        marginBottom: { xs: "40px", md: "80px" },
                    }}
                >
                    Perspectives
                </Typography>
            </motion.div>

            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "24px", md: "24px" },
                padding: { xs: "0px", md: "0px 40px" },
                width: "100%",
                maxWidth: "1400px",
                height: "518px",
            }}>
                <LayoutGroup>
                    {content.map((item, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            layoutId={`card-${index}`}
                            animate={{
                                flex: activeIndex === index ? 3 : 1,
                                opacity: activeIndex === index ? 1 : 0.7,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                            sx={{
                                height: "500px",
                                borderRadius: "35px",
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                willChange: "flex, opacity",
                            }}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Background Image Layer */}
                            <Box
                                component={motion.div}
                                animate={{
                                    filter: activeIndex === index ? "blur(0px)" : "blur(6px)",
                                    scale: activeIndex === index ? 1.05 : 1,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                sx={{
                                    position: "absolute",
                                    top: "-2px",
                                    left: "-2px",
                                    right: "-2px",
                                    bottom: "-2px",
                                    backgroundImage: `url('${item.image}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    zIndex: 0,
                                    willChange: "filter, transform",
                                }}
                            />

                            {/* Smooth Bottom Blur Accent (Active Only) */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.4, 0, 0.4, 1] }}
                                        sx={{
                                            position: "absolute",
                                            top: "-5px", // Extra overfill for blur layer
                                            left: "-5px",
                                            right: "-5px",
                                            bottom: "-5px",
                                            backgroundImage: `url('${item.image}')`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            filter: "blur(25px)",
                                            maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 60%, black 100%)",
                                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 60%, black 100%)",
                                            zIndex: 1,
                                            pointerEvents: "none",
                                            scale: 1.05,
                                        }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Improved Content Visibility Layer (Subtle Dark Overlay) */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(0, 0, 0, 0.2)", // Softer darken
                                    zIndex: 1,
                                }}
                            />

                            {/* Deeper Gradient Overlay for Bottom Content Contrast */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-2px",
                                    left: "-2px",
                                    right: "-2px",
                                    bottom: "-2px",
                                    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
                                    zIndex: 2,
                                }}
                            />

                            {/* Top Content */}
                            <Box sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                position: "relative",
                                zIndex: 2,
                                width: "100%",
                                padding: "32px",
                            }}>
                                <Box sx={{
                                    background: "rgba(255, 255, 255, 0.3)",
                                    backdropFilter: "blur(8px)",
                                    padding: "4px 12px",
                                    borderRadius: "25px",
                                    border: "1px solid rgba(255, 255, 255, 0.3)",
                                }}>
                                    <Typography sx={{
                                        color: "#ffffff",
                                        fontSize: "12px",
                                        fontWeight: 500,
                                        whiteSpace: "nowrap",
                                    }}>
                                        {item.tag}
                                    </Typography>
                                </Box>

                                <motion.div
                                    animate={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        x: activeIndex === index ? 0 : 20
                                    }}
                                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    <Typography sx={{
                                        color: "rgba(255, 255, 255, 0.8)",
                                        fontSize: "16px",
                                        whiteSpace: "nowrap",
                                        fontFamily: "var(--font-inter)",
                                        fontWeight: 500,
                                    }}>
                                        {item.Dateandtime}
                                    </Typography>
                                </motion.div>
                            </Box>

                            {/* Bottom Content */}
                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 3,
                                    width: "100%",
                                    padding: "32px",
                                }}
                            >
                                <Typography sx={{
                                    color: "#ffffff",
                                    fontSize: activeIndex === index ? "24px" : "18px",
                                    fontFamily: "var(--font-inter)",
                                    fontWeight: 500,
                                    marginBottom: "12px",
                                    lineHeight: 1.2,
                                    transition: "font-size 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}>
                                    {item.title === "Designing for Asynchronous Teams" ? "Designing\u00A0for Asynchronous Teams" : item.title}
                                </Typography>

                                <motion.div
                                    layout
                                    sx={{
                                        height: activeIndex === index ? "auto" : "24px",
                                        overflow: "hidden"
                                    }}
                                >
                                    <Typography sx={{
                                        color: "rgba(255, 255, 255, 0.7)",
                                        fontFamily: "var(--font-inter)",
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        lineHeight: 1.5,
                                        display: "-webkit-box",
                                        WebkitLineClamp: activeIndex === index ? 3 : 1,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        opacity: activeIndex === index ? 1 : 0.5,
                                        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                                    }}>
                                        {item.description}
                                    </Typography>
                                </motion.div>
                            </Box>
                        </Box>
                    ))}
                </LayoutGroup>
            </Box>

            {/* Navigation Indicators */}
            <Box
                sx={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "60px",
                    alignItems: "center",
                }}
            >
                {content.map((_, index) => (
                    <Box
                        key={index}
                        component={motion.div}
                        animate={{
                            width: activeIndex === index ? "100px" : "42px",
                            background: activeIndex === index ? "#000000" : "#ffffff",
                            border: activeIndex === index ? "2px solid rgba(255, 255, 255, 0.5)" : "2px solid transparent",
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                        sx={{
                            height: "18px",
                            borderRadius: "25px",
                            cursor: "pointer",
                        }}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </Box>

        </Box>
    );
};

export default Thoughts;
