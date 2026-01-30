"use client";

import { Box, Typography, Button, IconButton, Drawer } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GradientBlob from "../ui/GradientBlob";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function Hero() {
    const [showHeader, setShowHeader] = useState(false);
    const [isInHeroSection, setIsInHeroSection] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleNavigation = (item) => {
        let elementId;
        if (item === 'Mission') {
            elementId = 'vision-mission';
        } else if (item === 'Blog') {
            elementId = 'thoughts';
        } else {
            return; // Handle other menu items if needed
        }

        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Close mobile menu if open
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        // Only apply 3s delay for desktop view
        if (!isMobile) {
            const timer = setTimeout(() => {
                setShowHeader(true);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            // For mobile, show header immediately
            setShowHeader(true);
        }

        const handleScroll = () => {
            const heroHeight = 810; // Approximate hero section height
            const scrollPosition = window.scrollY;
            setIsInHeroSection(scrollPosition < heroHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (!isMobile) {
                clearTimeout(timer);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

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

            {/* Mobile Header - Always rendered, hidden on desktop with CSS */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "60px",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "60px",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    marginBottom: "40px",
                    marginTop: "-120px",
                    display: { xs: "flex", md: "none" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                }}
            >
                {/* Logo - Left side */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/g_logo.svg"
                        alt="Giggle Logo"
                        style={{
                            height: "35px",
                            width: "100px",
                        }}
                    />
                </Box>

                {/* Hamburger Menu - Right side */}
                <IconButton
                    onClick={() => setMobileMenuOpen(true)}
                    sx={{
                        color: "#FFFFFF",
                        padding: "8px",
                    }}
                >
                    <MenuIcon sx={{ fontSize: "28px" }} />
                </IconButton>

                {/* Mobile Navigation Drawer */}
                <Drawer
                    anchor="right"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: "280px",
                            background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
                            backdropFilter: "blur(10px)",
                            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            padding: "20px",
                        }}
                    >
                        {/* Close Button */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "40px",
                            }}
                        >
                            <IconButton
                                onClick={() => setMobileMenuOpen(false)}
                                sx={{
                                    color: "#FFFFFF",
                                    padding: "8px",
                                }}
                            >
                                <CloseIcon sx={{ fontSize: "28px" }} />
                            </IconButton>
                        </Box>

                        {/* Navigation Links */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                marginBottom: "40px",
                            }}
                        >
                            {['Product', 'About', 'Mission', 'Blog'].map((item) => (
                                <Typography
                                    key={item}
                                    onClick={() => handleNavigation(item)}
                                    sx={{
                                        fontFamily: "var(--font-poppins)",
                                        fontSize: "20px",
                                        fontWeight: 300,
                                        color: "#FFFFFF",
                                        cursor: "pointer",
                                        // '&:hover': {
                                        //     color: "#00D9FF",
                                        // },
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>

                        {/* Mobile Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                marginTop: "auto",
                            }}
                        >
                            <Button
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#000000",
                                    fontFamily: "var(--font-poppins)",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    textTransform: "none",
                                    borderRadius: "25px",
                                    padding: "12px 20px",
                                    boxShadow: "inset 0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                                }}
                            >
                                Sign in
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#000000",
                                    color: "#ffffff",
                                    fontFamily: "var(--font-poppins)",
                                    boxShadow: "inset 0px 0px 4px 0px #E7E7E7",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    textTransform: "none",
                                    borderRadius: "25px",
                                    padding: "12px 20px",
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Box>
                </Drawer>
            </Box>

            {/* Desktop Header - Always rendered for desktop, with animation and delay */}
            <Box
                component={motion.div}
                initial={{ width: "192px" }}
                animate={{ width: showHeader ? "100%" : "192px" }}
                transition={{ duration: 2, delay: showHeader ? 0 : 2.5, ease: "circOut" }}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "80px",
                    overflow: "hidden",
                    borderRadius: showHeader ? "60px" : "8px",
                    background: showHeader ? "rgba(255, 255, 255, 0.05)" : "transparent",
                    backdropFilter: showHeader ? "blur(10px)" : "none",
                    marginBottom: "100px",
                    marginTop: "-30px",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    padding: showHeader ? "0 40px" : "0",
                }}
            >
                {/* Logo */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        left: showHeader ? "20px" : "50%",
                        transform: showHeader ? "none" : "translateX(-50%)",
                    }}
                >
                    <img
                        src="/g_logo.svg"
                        alt="Giggle Logo"
                        style={{
                            height: "43px",
                            width: showHeader ? "126px" : "192px",
                        }}
                    />
                </Box>

                {/* Navigation and Buttons - appear when header expands */}
                <AnimatePresence>
                    {showHeader && (
                        <>
                            {/* Navigation Links - Center */}
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                sx={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    gap: "39px",
                                }}
                            >
                                {['Product', 'About', 'Mission', 'Blog'].map((item) => (
                                    <Typography
                                        key={item}
                                        onClick={() => handleNavigation(item)}
                                        sx={{
                                            fontFamily: "var(--font-poppins)",
                                            fontSize: "16px",
                                            fontWeight: 300,
                                            color: "#FFFFFF",
                                            cursor: "pointer",
                                            '&:hover': {
                                                color: "#00D9FF",
                                            },
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>

                            {/* Buttons - Right */}
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                sx={{
                                    position: "absolute",
                                    right: "20px",
                                    display: "flex",
                                    gap: "16px",
                                }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#000000",
                                        fontFamily: "var(--font-poppins)",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        textTransform: "none",
                                        borderRadius: "25px",
                                        padding: "8px 20px",
                                        boxShadow: "inset 0px 0px 4px 0px rgba(0, 0, 0, 0.15)",
                                    }}
                                >
                                    Sign in
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#000000",
                                        color: "#ffffff",
                                        fontFamily: "var(--font-poppins)",
                                        boxShadow: "inset 0px 0px 4px 0px #E7E7E7",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        textTransform: "none",
                                        borderRadius: "25px",
                                        padding: "8px 20px",
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </>
                    )}
                </AnimatePresence>
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
                    fontSize: { xs: "18px", sm: "24px" },
                    fontWeight: 200,
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
                    flexDirection: "column",
                    gap: "22px",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Start Collaborating Button with animation */}
                <Box
                    sx={{
                        position: "relative",
                        width: { xs: "120%", sm: "350px", md: "388px" },
                        height: { xs: "56px", sm: "62px", md: "68px" },
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
                            duration: 8,
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
                        endIcon={<ArrowForwardIcon sx={{ width: { xs: "20px", sm: "22px", md: "24px" }, height: { xs: "20px", sm: "22px", md: "24px" } }} />}
                        sx={{
                            position: "relative",
                            zIndex: 3,
                            backgroundColor: "transparent",
                            color: "#ffffff",
                            width: "100%",
                            height: "100%",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                            fontSize: { xs: "18px", sm: "21px", md: "24px" },
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
                        width: { xs: "100%", sm: "280px", md: "308px" },
                        height: { xs: "48px", sm: "52px", md: "56px" },
                        overflow: "hidden",
                        borderRadius: "35px",
                    }}
                >
                    {/* Rotating conic gradient - black notch on white border */}
                    {/* <motion.div
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
                            duration: 8,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    /> */}

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
                        endIcon={<PlayArrowIcon sx={{ width: { xs: "26px", sm: "29px", md: "32px" }, height: { xs: "26px", sm: "29px", md: "32px" } }} />}
                        sx={{
                            position: "relative",
                            zIndex: 3,
                            backgroundColor: "transparent",
                            color: "#000000",
                            width: "100%",
                            height: "100%",
                            fontFamily: "var(--font-helvetica)",
                            fontWeight: 500,
                            fontSize: { xs: "20px", sm: "22px", md: "24px" },
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
