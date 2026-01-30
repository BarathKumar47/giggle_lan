"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { StarsBackground } from "../ui/stars";


const BrandLogo = () => {
    return (
        <>
        <Box
        sx={{
            width:"100%",
            height:"150px",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
           
        }}>
        </Box>
        <StarsBackground
            id="brandlogo"
            sx={{
                width: "100%",
                height: { xs: "500px", md: "762px" },
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#000000",
                // Refined mask with rgba for better browser compatibility and smoother alpha transitions
                // maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px, rgba(0,0,0,1) calc(100% - 100px), rgba(0,0,0,0) 100%)",
                // WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100px, rgba(0,0,0,1) calc(100% - 100px), rgba(0,0,0,0) 100%)",
                // marginBottom: "-1px", // Ensure perfect overlap to hide sub-pixel lines
            }}
        >
            {/* Logo */}
            <Box
                component="img"
                src="/brand_logo.webp"
                alt="Giggle Logo"
                sx={{
                    height: { xs: "300px", md: "451px" },
                    width: "auto",
                    marginBottom: "40px",
                    position: "relative",
                    zIndex: 1,
                }}
            />

            {/* Aquila Text */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: "20px", md: "60px" },
                    right: { xs: "20px", md: "10px" },
                    left: { xs: "20px", md: "auto" },
                    textAlign: { xs: "center", md: "right" },
                    zIndex: 3,
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: "rgba(255, 255, 255, 0.4)",
                        fontSize: { xs: "12px", md: "14px" },
                        maxWidth: "460px",
                        margin: { xs: "0 auto", md: "0" },
                        paddingBottom: { xs: "25px", md: "140px" },
                        // WebkitLineClamp: 2,
                        fontWeight: 300,
                        textAlign: "justify",
                        transition: "color 0.3s ease",
                        "&:hover": {
                            color: "rgba(255, 255, 255, 0.8)",
                        },
                    }}
                >
                    Aquila, Latin for "eagle," is a prominent equatorial constellation representing the bird that carried Zeus's thunderbolts in Greek mythology.
                </Typography>
            </Box>
        </StarsBackground>
        <Box
        sx={{
            width:"100%",
            height:"150px",
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
           
        }}>
        </Box>
    </>
    );
};

export default BrandLogo;
