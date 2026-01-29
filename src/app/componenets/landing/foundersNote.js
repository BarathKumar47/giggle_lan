"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FoundersNote = () => {
    return (
        <Box
            id="founders-note"
            sx={{
                width: "100%",
                minHeight: { xs: "600px", md: "700px" },
                background: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: { xs: "60px 20px", md: "80px 40px" },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    maxWidth: "800px",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* CORE NOTES Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
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
                            margin: "0 auto 16px auto",
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
                            CORE NOTES
                        </Typography>
                    </Box>
                </motion.div>

                {/* Founder's Note Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "48px", md: "64px" },
                            fontWeight: 500,
                            color: "#ffffff",
                            marginBottom: { xs: "40px", md: "56px" },
                            lineHeight: 1.2,
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            Founder's
                        </Box>
                        <br />
                        <Box
                            component="span"
                            sx={{
                                fontFamily: "var(--font-playfair)",
                                fontStyle: "italic",
                            }}
                        >
                            Note
                        </Box>
                    </Typography>
                </motion.div>

                {/* Body Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: { xs: "18px", md: "20px" },
                            fontWeight: 300,
                            color: "#ffffff",
                            lineHeight: 2,
                            maxWidth: "800px",
                            margin: "0 auto",
                        }}
                    >
                        Every part of the lifestyle we live started with just a handful of people;
                        <br />
                        crazy enough to dream it, bold enough to try.
                        <br />
                        What started as a vision became the way the world works, connects, and thrives.
                        <br /><br />
                        Now it's our turn.<br />
                        And we want you in it.<br />
                        Not as a customer — as a fellow visionary.
                        <br /><br />
                        Together, we’re not just changing the way we live. <br />
                        We're creating something so big, it becomes <Box component="span" sx={{ fontWeight: 700 }}>culture</Box>.
                    </Typography>
                </motion.div>
            </Box>

            {/* Subtle background elements */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    left: "5%",
                    width: "200px",
                    height: "200px",
                    background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "15%",
                    right: "8%",
                    width: "150px",
                    height: "150px",
                    background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                }}
            />
        </Box>
    );
};

export default FoundersNote;
