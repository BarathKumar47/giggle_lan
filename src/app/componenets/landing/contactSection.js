"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactSection() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "#000000",
                display: "flex",
                flexDirection: "column",
                padding: "80px 0px",
                position: "relative",
            }}
        >
            {/* Main Content */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    width: "100%",
                    padding: "0px 20px",
                    gap: { xs: "60px", lg: "80px" },
                }}
            >
                {/* Left Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: 1,
                        textAlign: { xs: "center", lg: "left" },
                        marginTop:'-7rem'
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: "2.5rem", md: "3.75rem" },
                            fontWeight: 500,
                            color: "#ffffff",
                            marginBottom: "35px",
                            fontFamily: "var(--font-helvetica)",
                        }}
                    >
                        Let's build<br />something <Box component="span" sx={{ fontFamily: "var(--font-playfair)" ,fontStyle:'italic'}}>great.</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "1rem", md: "1rem" },
                            color: "#999999",
                            fontWeight: 300,
                            marginBottom: "40px",
                            lineHeight: '100%',
                            letterSpacing: '0%',    
                            fontFamily: "var(--font-inter)",
                            maxWidth: { xs: "100%", lg: "500px" },
                        }}
                    >
                        Have a project in mind? We'd love to hear about it. 
                        Take a minute to tell us about your project and we'll 
                        get back to you as soon as possible.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "16px",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: { xs: "center", lg: "flex-start" },
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                background: "#FFFFFF",
                                color: "#000000",
                                padding: "12px 32px",
                                borderRadius: "25px",
                                fontSize: "1rem",
                                fontWeight: 600,
                                textTransform: "none",
                                boxShadow: "inset 0px 0px 8px 0px rgba(0, 0, 0, 0.5)",
                                // "&:hover": {
                                //     background: "linear-gradient(135deg, #8B3FFF 0%, #10E9FF 100%)",
                                //     transform: "translateY(-2px)",
                                //     boxShadow: "0 8px 25px rgba(123, 47, 255, 0.3)",
                                // },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Get Started Now
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: "#7F7F7F",
                                color: "#ffffff",
                                padding: "12px 32px",
                                borderRadius: "25px",
                                fontSize: "1rem",
                                fontWeight: 400,
                                textTransform: "none",
                                "&:hover": {
                                    borderColor: "#666666",
                                    background: "rgba(255, 255, 255, 0.05)",
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Contact Sales
                        </Button>
                    </Box>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        flex: 1,
                        width: "100%",
                        // maxWidth: "500px",
                    }}
                >
                    <Box
                        sx={{
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "18px",
                            padding: "40px",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                            width: "595px",
                        }}
                    >
                        
                        <Box sx={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label
                                    htmlFor="first-name"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.7)",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "12px",
                                        fontWeight: 300,
                                    }}
                                >
                                    FIRST NAME
                                </label>
                                <input
                                    id="first-name"
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "42px",
                                        padding: "16.5px 14px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        backgroundColor: "transparent",
                                        color: "#ffffff",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "16px",
                                        outline: "none",
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label
                                    htmlFor="last-name"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.7)",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "12px",
                                        fontWeight: 300,
                                    }}
                                >
                                    LAST NAME
                                </label>
                                <input
                                    id="last-name"
                                    type="text"
                                    style={{
                                        width: "100%",
                                        height: "42px",
                                        padding: "16.5px 14px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        backgroundColor: "transparent",
                                        color: "#ffffff",
                                        fontFamily: "var(--font-inter)",
                                        fontSize: "16px",
                                        outline: "none",
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                            <label
                                htmlFor="email"
                                style={{
                                    color: "rgba(255, 255, 255, 0.7)",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "12px",
                                    fontWeight: 300,
                                }}
                            >
                                EMAIL
                            </label>
                            <input
                                id="email"
                                type="email"
                                style={{
                                    width: "100%",
                                    height: "42px",
                                    padding: "16.5px 14px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    backgroundColor: "transparent",
                                    color: "#ffffff",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "16px",
                                    outline: "none",
                                }}
                            />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
                            <label
                                htmlFor="message"
                                style={{
                                    color: "rgba(255, 255, 255, 0.7)",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "12px",
                                    fontWeight: 300,
                                }}
                            >
                                MESSAGE
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                style={{
                                    width: "100%",
                                    // padding: "16.5px 14px",
                                    height: "80px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    backgroundColor: "transparent",
                                    color: "#ffffff",
                                    fontFamily: "var(--font-inter)",
                                    fontSize: "16px",
                                    outline: "none",
                                    resize: "none",
                                }}
                            />
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                background: "linear-gradient(135deg, rgba(211, 75, 255, 1) 0%, rgba(127, 139, 255, 1) 100%)",
                                color: "#ffffff",
                                padding: "10px 14px",
                                borderRadius: "8px",
                                fontSize: "12px",
                                fontWeight: 500,
                                textTransform: "none",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #8B3FFF 0%, #10E9FF 100%)",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 8px 25px rgba(123, 47, 255, 0.3)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </motion.div>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    paddingTop: "40px",
                    marginTop: "80px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        width: "100%",
                        padding: "0px 20px",
                        gap: "32px",
                    }}
                >
                    {/* Logo and Copyright */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", md: "flex-start" },
                            gap: "16px",
                        }}
                    >
                        <img
                            src="/g_logo.svg"
                            alt="Giggle Logo"
                            style={{
                                height: "43px",
                                width: "117px",
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#4C5C6E",
                                fontSize: "10px",
                                position: "absolute",
                                bottom: "20px",
                                left: "36rem",
                                fontFamily: "var(--font-inter)",
                            }}
                        >
                            © 2024 Giggle. All rights reserved.
                        </Typography>
                    </Box>

                    {/* Navigation Links */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "32px",
                            marginTop: "-1rem",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: "rgba(255, 255, 255, 0.5)",
                                fontSize: "12px",
                                cursor: "pointer",
                                transition: "color 0.3s ease",
                                fontWeight: 300,
                                fontFamily: "var(--font-inter)",
                                "&:hover": {
                                    color: "#ffffff",
                                },
                            }}
                        >
                            Privacy
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "rgba(255, 255, 255, 0.5)",
                                fontSize: "12px",
                                cursor: "pointer",
                                transition: "color 0.3s ease",
                                fontWeight: 300,
                                fontFamily: "var(--font-inter)",
                                "&:hover": {
                                    color: "#ffffff",
                                },
                            }}
                        >
                            Terms
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "rgba(255, 255, 255, 0.5)",
                                fontSize: "12px",
                                cursor: "pointer",  
                                transition: "color 0.3s ease",
                                fontWeight: 300,
                                fontFamily: "var(--font-inter)",
                                "&:hover": {
                                    color: "#ffffff",
                                },
                            }}
                        >
                            Cookies
                        </Typography>
                    </Box>

                    {/* Social Media Icons */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "16px",
                            marginTop: "-0.5rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                // background: "rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "rgba(255, 255, 255, 0.2)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <InstagramIcon sx={{ color: "#ffffff", fontSize: "36px" }} />
                        </Box>
                        <Box
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                // background: "rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "rgba(255, 255, 255, 0.2)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <FacebookIcon sx={{ color: "#ffffff", fontSize: "36px"  }} />
                        </Box>
                        <Box
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                // background: "rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "rgba(255, 255, 255, 0.2)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <LinkedInIcon sx={{ color: "#ffffff", fontSize: "36px" }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
