"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function TheProcess() {

    return (
        <Box
            sx={{
                width: "100%",
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "60px 20px", md: "80px 32px" },
                position: "relative",
            }}
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                sx={{
                    textAlign: "center",
                    marginBottom: { xs: "60px", md: "80px" },
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
                        THE PROCESS
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontFamily: "var(--font-roboto)",
                        fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        marginBottom: "0px",
                    }}
                >
                    Built to be
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#ffffff",
                        lineHeight: 1.1,
                        textAlign: "center",
                        marginBottom: "4rem",

                    }}
                >
                    efficient.
                </Typography>
            </motion.div>

            {/* Process Cards - Individual Card 1 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "none" },
                    gap: { xs: "30px", md: "40px", lg: "50px" },
                    maxWidth: "400px",
                    width: "100%",
                    margin: { xs: "0 0 40px 0", md: "0 auto" },
                    position: "relative",
                    alignSelf: { xs: "center", md: "flex-end" },
                    marginRight: { xs: "auto", md: "10%" },
                }}
            >

                <div
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "visible",
                        }}
                    >
                        {/* Outer Layer */}
                        <Box
                            sx={{
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "20px",
                                padding: "90px 25px 25px 25px",
                                position: "relative",
                                right: { xs: "auto", md: "2rem" },
                                overflow: "visible",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                transform: { xs: "none", md: "rotate(-15deg)" },
                                border: "1px solid #A5A5A5",
                                "&:hover": {
                                    transform: { xs: "none", md: "rotate(-15deg) translateY(-4px) scale(1.02)" },
                                    boxShadow: "0px 0px 32px 0px rgba(165, 165, 165, 0.7)",
                                },
                            }}
                        >
                            {/* Hole in outer layer */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "12px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: "#000000",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "50%",
                                    zIndex: 2,
                                }}
                            />

                            {/* Inner Layer */}
                            <Box
                                sx={{
                                    background: "#474747",
                                    borderRadius: "16px",
                                    padding: { xs: "24px 20px", md: "10px 28px" },
                                    height: { xs: "auto", md: "280px", lg: "360px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "visible",
                                    border: "1px solid #A5A5A5",
                                    boxShadow: "0px 0px 24px 0px rgba(165, 165, 165, 0.5)",
                                    transform: { xs: "none", md: "none" },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "1px",
                                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                                    },
                                }}
                            >
                                {/* Number */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "18px", md: "45px" },
                                        fontWeight: 600,
                                        color: "#FFC4B2",
                                        textAlign: "left",
                                    }}
                                >
                                    01
                                </Typography>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "24px", md: "32px" },
                                        fontWeight: 500,
                                        color: "#E65930",
                                        marginBottom: "10px",
                                        textAlign: "left",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Define
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "14px", md: "20px" },
                                        fontWeight: 400,
                                        color: "#E7E7E7",
                                        letterSpacing: '0%',
                                        lineHeight: '32px',
                                        textAlign: "left",
                                        flex: 1,
                                        opacity: 0.9,
                                    }}
                                >
                                    We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box>

            {/* Process Cards - Individual Card 2 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "none" },
                    gap: { xs: "30px", md: "40px", lg: "50px" },
                    maxWidth: "400px",
                    width: "100%",
                    margin: { xs: "0 0 40px 0", md: "0 auto" },
                    position: "relative",
                    alignSelf: { xs: "center", md: "flex-start" },
                    marginLeft: { xs: "auto", md: "10%" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "visible",
                        }}
                    >
                        {/* Outer Layer */}
                        <Box
                            sx={{
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "20px",
                                padding: "90px 25px 25px 25px",
                                position: "relative",
                                left: { xs: "auto", md: "2rem" },
                                top: { xs: "auto", md: "-8rem" },
                                overflow: "visible",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                border: "1px solid #A5A5A5",
                                transform: { xs: "none", md: "rotate(15deg)" },
                                "&:hover": {
                                    transform: { xs: "none", md: "rotate(15deg) translateY(-4px) scale(1.02)" },
                                    boxShadow: "0px 0px 32px 0px rgba(165, 165, 165, 0.7)",
                                },
                            }}
                        >
                            {/* Hole in outer layer */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "12px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: "#000000",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "50%",
                                    zIndex: 2,
                                }}
                            />

                            {/* Inner Layer */}
                            <Box
                                sx={{
                                    background: "#474747",
                                    borderRadius: "16px",
                                    padding: { xs: "24px 20px", md: "10px 28px" },
                                    height: { xs: "auto", md: "280px", lg: "360px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "visible",
                                    border: "1px solid #A5A5A5",
                                    boxShadow: "0px 0px 24px 0px rgba(165, 165, 165, 0.5)",
                                    transform: { xs: "none", md: "none" },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "1px",
                                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                                    },
                                }}
                            >
                                {/* Number */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "18px", md: "45px" },
                                        fontWeight: 600,
                                        color: "#FFE8AF",
                                        textAlign: "left",
                                    }}
                                >
                                    02
                                </Typography>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "24px", md: "32px" },
                                        fontWeight: 500,
                                        color: "#E69A30",
                                        marginBottom: "10px",
                                        textAlign: "left",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Design
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "14px", md: "20px" },
                                        fontWeight: 400,
                                        color: "#E7E7E7",
                                        letterSpacing: '0%',
                                        lineHeight: '32px',
                                        textAlign: "left",
                                        flex: 1,
                                        opacity: 0.9,
                                    }}
                                >
                                    We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Process Cards - Individual Card 3 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "none" },
                    gap: { xs: "30px", md: "40px", lg: "50px" },
                    maxWidth: "400px",
                    width: "100%",
                    margin: { xs: "0 0 40px 0", md: "0 auto" },
                    position: "relative",
                    alignSelf: { xs: "center", md: "flex-end" },
                    marginRight: { xs: "auto", md: "15%" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "visible",
                        }}
                    >
                        {/* Outer Layer */}
                        <Box
                            sx={{
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "20px",
                                padding: "90px 25px 25px 25px",
                                position: "relative",
                                top: { xs: "auto", md: "-12rem" },
                                right: { xs: "auto", md: "2rem" },
                                overflow: "visible",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                border: "1px solid #A5A5A5",
                                transform: { xs: "none", md: "rotate(-15deg)" },
                                "&:hover": {
                                    transform: { xs: "none", md: "rotate(-15deg) translateY(-4px) scale(1.02)" },
                                    boxShadow: "0px 0px 32px 0px rgba(165, 165, 165, 0.7)",
                                },
                            }}
                        >
                            {/* Hole in outer layer */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "12px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: "#000000",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "50%",
                                    zIndex: 2,
                                }}
                            />

                            {/* Inner Layer */}
                            <Box
                                sx={{
                                    background: "#474747",
                                    borderRadius: "16px",
                                    padding: { xs: "24px 20px", md: "10px 28px" },
                                    height: { xs: "auto", md: "280px", lg: "360px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "visible",
                                    border: "1px solid #A5A5A5",
                                    boxShadow: "0px 0px 24px 0px rgba(165, 165, 165, 0.5)",
                                    transform: { xs: "none", md: "none" },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "1px",
                                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                                    },
                                }}
                            >
                                {/* Number */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "18px", md: "45px" },
                                        fontWeight: 600,
                                        color: "#EFBDFF",
                                        textAlign: "left",
                                    }}
                                >
                                    03
                                </Typography>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "24px", md: "32px" },
                                        fontWeight: 500,
                                        color: "#D34BFF",
                                        marginBottom: "10px",
                                        textAlign: "left",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Collaborate
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "14px", md: "20px" },
                                        fontWeight: 400,
                                        color: "#E7E7E7",
                                        letterSpacing: '0%',
                                        lineHeight: '32px',
                                        textAlign: "left",
                                        flex: 1,
                                        opacity: 0.9,
                                    }}
                                >
                                    We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Process Cards - Individual Card 4 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "none" },
                    gap: { xs: "30px", md: "40px", lg: "50px" },
                    maxWidth: "400px",
                    width: "100%",
                    margin: { xs: "0 0 40px 0", md: "0 auto" },
                    position: "relative",
                    alignSelf: { xs: "center", md: "flex-start" },
                    marginLeft: { xs: "auto", md: "15%" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3 * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "visible",
                        }}
                    >
                        {/* Outer Layer */}
                        <Box
                            sx={{
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "20px",
                                padding: "90px 25px 25px 25px",
                                position: "relative",
                                left: { xs: "auto", md: "-2rem" },
                                top: { xs: "auto", md: "-18rem" },
                                overflow: "visible",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                border: "1px solid #A5A5A5",
                                transform: { xs: "none", md: "rotate(15deg)" },
                                "&:hover": {
                                    transform: { xs: "none", md: "rotate(15deg) translateY(-4px) scale(1.02)" },
                                    boxShadow: "0px 0px 32px 0px rgba(165, 165, 165, 0.7)",
                                },
                            }}
                        >
                            {/* Hole in outer layer */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "12px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: "#000000",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "50%",
                                    zIndex: 2,
                                }}
                            />

                            {/* Inner Layer */}
                            <Box
                                sx={{
                                    background: "#474747",
                                    borderRadius: "16px",
                                    padding: { xs: "24px 20px", md: "10px 28px" },
                                    height: { xs: "auto", md: "280px", lg: "360px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "visible",
                                    border: "1px solid #A5A5A5",
                                    boxShadow: "0px 0px 24px 0px rgba(165, 165, 165, 0.5)",
                                    transform: { xs: "none", md: "none" },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "1px",
                                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                                    },
                                }}
                            >
                                {/* Number */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "18px", md: "45px" },
                                        fontWeight: 600,
                                        color: "#B9B9FF",
                                        textAlign: "left",
                                    }}
                                >
                                    04
                                </Typography>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "24px", md: "32px" },
                                        fontWeight: 500,
                                        color: "#5A5AFF",
                                        marginBottom: "10px",
                                        textAlign: "left",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Test
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "14px", md: "20px" },
                                        fontWeight: 400,
                                        color: "#E7E7E7",
                                        letterSpacing: '0%',
                                        lineHeight: '32px',
                                        textAlign: "left",
                                        flex: 1,
                                        opacity: 0.9,
                                    }}
                                >
                                    We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Process Cards - Individual Card 5 */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "none" },
                    gap: { xs: "30px", md: "40px", lg: "50px" },
                    maxWidth: "400px",
                    width: "100%",
                    margin: { xs: "0 0 40px 0", md: "0 auto" },
                    position: "relative",
                    alignSelf: { xs: "center", md: "flex-end" },
                    marginRight: { xs: "auto", md: "20%" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 4 * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ position: "relative", zIndex: 1 }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "visible",
                        }}
                    >
                        {/* Outer Layer */}
                        <Box
                            sx={{
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "20px",
                                padding: "90px 25px 25px 25px",
                                position: "relative",
                                top: { xs: "auto", md: "-25rem" },
                                right: { xs: "auto", md: "-2rem" },
                                overflow: "visible",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                border: "1px solid #A5A5A5",
                                transform: { xs: "none", md: "rotate(-15deg)" },
                                "&:hover": {
                                    transform: { xs: "none", md: "rotate(-15deg) translateY(-4px) scale(1.02)" },
                                    boxShadow: "0px 0px 32px 0px rgba(165, 165, 165, 0.7)",
                                },
                            }}
                        >
                            {/* Hole in outer layer */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "12px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "30px",
                                    height: "30px",
                                    backgroundColor: "#000000",
                                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                                    borderRadius: "50%",
                                    zIndex: 2,
                                }}
                            />

                            {/* Inner Layer */}
                            <Box
                                sx={{
                                    background: "#474747",
                                    borderRadius: "16px",
                                    padding: { xs: "24px 20px", md: "10px 28px" },
                                    height: { xs: "auto", md: "280px", lg: "360px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                    overflow: "visible",
                                    border: "1px solid #A5A5A5",
                                    boxShadow: "0px 0px 24px 0px rgba(165, 165, 165, 0.5)",
                                    transform: { xs: "none", md: "none" },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "1px",
                                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                                    },
                                }}
                            >
                                {/* Number */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "18px", md: "45px" },
                                        fontWeight: 600,
                                        color: "#C6EFFF",
                                        textAlign: "left",
                                    }}
                                >
                                    05
                                </Typography>

                                {/* Title */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "24px", md: "32px" },
                                        fontWeight: 500,
                                        color: "#67D4FF",
                                        marginBottom: "10px",
                                        textAlign: "left",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    Deploy
                                </Typography>

                                {/* Description */}
                                <Typography
                                    sx={{
                                        fontFamily: "var(--font-inter)",
                                        fontSize: { xs: "14px", md: "20px" },
                                        fontWeight: 400,
                                        color: "#E7E7E7",
                                        letterSpacing: '0%',
                                        lineHeight: '32px',
                                        textAlign: "left",
                                        flex: 1,
                                        opacity: 0.9,
                                    }}
                                >
                                    We started Giggle because we were tired of the friction. The endless email chains, the chased invoices, the broken trust. We knew there had to be a better way to bring creative minds together.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
}
