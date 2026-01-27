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
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 20px",
                position: "relative",
                overflow: "hidden",
            }}
        >
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

            {/* Badge with Glassmorphism and Expansion */}
            <Box
                component={motion.div}
                initial={{ width: "36px" }}
                animate={{ width: "299px" }}
                transition={{ duration: 2, delay: 2.5, ease: "circOut" }}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "38px",
                    overflow: "hidden",
                    borderRadius: "25px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Rotating Border with CSS Mask */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        borderRadius: "25px",
                        padding: "1.5px", // Border width
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                        pointerEvents: "none",
                    }}
                >
                    <motion.div
                        style={{
                            position: "absolute",
                            top: "-450%",
                            left: "-50%",
                            width: "200%",
                            height: "1000%",
                            background: "conic-gradient(transparent 230deg, #ffffff)",
                            opacity: 0.6,
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
                </Box>
                {/* Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 3,
                        width: "299px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "0 14px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "14px",
                        }}
                    >
                        {["#22c55e", "#ef4444", "#f59e0b"].map((color, i) => (
                            <Box
                                key={i}
                                component={motion.div}
                                animate={{
                                    opacity: i === 0
                                        ? [1, 1, 0, 0] // Green: Show for 75%, hide for 25%
                                        : i === 1
                                            ? [0, 0, 1, 1, 0, 0] // Red: Show at 25%, hide at 75%
                                            : [0, 0, 1, 1, 0, 0] // Yellow: Show at 50%, hide at 75%
                                }}
                                transition={{
                                    duration: 2,
                                    times: i === 0
                                        ? [0, 0.75, 0.75, 1]
                                        : i === 1
                                            ? [0, 0.25, 0.25, 0.75, 0.75, 1]
                                            : [0, 0.5, 0.5, 0.75, 0.75, 1],
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                sx={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    backgroundColor: color,
                                }}
                            />
                        ))}
                    </Box>
                    <Typography
                        component={motion.p}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.6 }}
                        sx={{
                            fontSize: "10px",
                            fontWeight: 400,
                            fontFamily: "var(--font-inter)",
                            color: "rgba(255, 255, 255, 0.8)",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
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
