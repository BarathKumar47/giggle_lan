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
        </StarsBackground>
    );
};

export default BrandLogo;
