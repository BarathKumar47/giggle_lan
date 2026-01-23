"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import GradientBlob from "../ui/GradientBlob";

export default function Hero() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "810px",
                background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 20px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <GradientBlob
                // colors={["#00D9FF", "#7B2FFF", "#FF2E97", "#00FFA3", "#FFD600"]}
                blobCount={10}
                animationSpeed={1}
                blur={40}
                opacity={0.8}
                scale={2.5}
            />
            {/* Logo */}
            <Box
                sx={{
                    marginBottom: "40px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <img
                    src="/g_logo.svg"
                    alt="Giggle Logo"
                    style={{
                        height: "43px",
                        width: "192px",
                    }}
                />
            </Box>

            {/* Badge with Conic Gradient Animation */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "299px",
                    height: "38px",
                    overflow: "hidden",
                    borderRadius: "25px",
                    marginBottom: "32px",
                }}
            >
                {/* Rotating conic gradient */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: "-450%",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "1000%",
                        background: "conic-gradient(transparent 200deg, #ffffff)",
                        borderRadius: "25px",
                        zIndex: 1,
                    }}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                />

                {/* Inner overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "1px",
                        left: "1px",
                        right: "1px",
                        bottom: "1px",
                        backdropFilter: "blur(2px)",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "24px",
                        zIndex: 2,
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 3,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "14px 16px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#ef4444",
                            }}
                        />
                        <Box
                            sx={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#f59e0b",
                            }}
                        />
                        <Box
                            sx={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#22c55e",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            fontWeight: 400,
                            fontFamily: "var(--font-inter)",
                            color: "rgba(255, 255, 255, 0.8)",
                            textTransform: "uppercase",
                        }}
                    >
                        The new standard for freelancers
                    </Typography>
                </Box>
            </Box>

            {/* Main Heading */}
            <Typography
                variant="h1"
                sx={{
                    fontFamily: "var(--font-inter)",
                    fontSize: { xs: "3rem", sm: "4rem", md: "96px" },
                    fontWeight: 500,
                    color: "#ffffff",
                    textAlign: "center",
                    lineHeight: 1.1,
                    marginBottom: "24px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                Collaborate
                <br />
                <Box
                    component="span"
                    sx={{
                        fontFamily: "var(--font-playfair)",
                        fontStyle: "italic",
                        fontWeight: 500,
                    }}
                >
                    Seamlessly
                </Box>
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#E7E7E7",
                    textAlign: "center",
                    maxWidth: "782px",
                    lineHeight: '34px',
                    marginBottom: "40px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                Giggle bridges the gap between talent and vision with a workspace
                designed for fluid, trustworthy collaboration.
            </Typography>

            {/* CTA Buttons */}
            <Box
                sx={{
                    display: "flex",
                    gap: "32px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Start Collaborating Button with animation */}
                <Box
                    sx={{
                        position: "relative",
                        width: "328px",
                        height: "56px",
                        overflow: "hidden",
                        borderRadius: "35px",
                    }}
                >
                    {/* Rotating conic gradient - white */}
                    <motion.div
                        style={{
                            position: "absolute",
                            top: "-450%",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: "1000%",
                            background: "conic-gradient(transparent 200deg, #ffffff)",
                            borderRadius: "35px",
                            zIndex: 1,
                        }}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    />

                    {/* Inner overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "2px",
                            left: "2px",
                            right: "2px",
                            bottom: "2px",
                            backgroundColor: "#000000",
                            borderRadius: "33px",
                            zIndex: 2,
                        }}
                    />

                    {/* Button content */}
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ width: "24px", height: "24px" }} />}
                        sx={{
                            position: "relative",
                            zIndex: 3,
                            backgroundColor: "transparent",
                            color: "#ffffff",
                            width: "100%",
                            height: "100%",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            fontSize: "24px",
                            borderRadius: "35px",
                            textTransform: "none",
                            border: "none",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Start Collaborating
                    </Button>
                </Box>

                {/* Watch showreels Button with animation */}
                <Box
                    sx={{
                        position: "relative",
                        width: "328px",
                        height: "56px",
                        overflow: "hidden",
                        borderRadius: "35px",
                    }}
                >
                    {/* Rotating conic gradient - black notch on white border */}
                    <motion.div
                        style={{
                            position: "absolute",
                            top: "-450%",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: "1000%",
                            background: "conic-gradient(#ffffff 200deg, #000000)",
                            borderRadius: "35px",
                            zIndex: 1,
                        }}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    />

                    {/* Inner overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: "2px",
                            left: "2px",
                            right: "2px",
                            bottom: "2px",
                            backgroundColor: "#ffffff",
                            borderRadius: "33px",
                            zIndex: 2,
                        }}
                    />

                    {/* Button content */}
                    <Button
                        variant="outlined"
                        endIcon={<PlayArrowIcon sx={{ width: "32px", height: "32px" }} />}
                        sx={{
                            position: "relative",
                            zIndex: 3,
                            backgroundColor: "transparent",
                            color: "#000000",
                            width: "100%",
                            height: "100%",
                            fontFamily: "var(--font-helvetica)",
                            fontWeight: 500,
                            fontSize: "24px",
                            borderRadius: "35px",
                            textTransform: "none",
                            border: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                                border: "none",
                            },
                        }}
                    >
                        Watch showreels
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
