"use client";

import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";


const BrandLogo = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "762px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "visible",
                background:"black"
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
        </Box>
    );
};

export default BrandLogo;
