"use client";

import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { StarsBackground } from "../ui/stars";


const BrandLogo = () => {
    return (
        <StarsBackground
            sx={{
                width: "100%",
                height: "762px",
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
                sx={{
                    marginBottom: "40px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <img
                    src="/brand_logo.svg"
                    alt="Giggle Logo"
                    style={{
                        height: "551px",
                        width: "451px",
                    }}
                />
            </Box>
        </StarsBackground>
    );
};

export default BrandLogo;
