"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { StarsBackground } from "../ui/stars";


const BrandLogo = () => {
    return (
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
                background: "black"
            }}
        >
            {/* Logo */}
            <Box
                component="img"
                src="/brand_logo.svg"
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
                    bottom: "20px",
                    right: "20px",
                    textAlign: "right",
                    zIndex: 2,
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: "rgba(255, 255, 255, 0.2)",
                        fontSize: { xs: "12px", md: "14px" },
                        maxWidth: "500px",
                        fontWeight: 300,
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
    );
};

export default BrandLogo;
