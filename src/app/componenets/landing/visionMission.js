"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function VisionMission() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "#000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "60px 20px", md: "80px 32px" },
                position: "relative",
            }}
        >
            {/* Core Values Title Section */}
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
                        CORE VALUES
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontFamily: "var(--font-roboto)",
                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: 1.1,

                        marginBottom: "0px",
                    }}
                >
                    Our Guiding
                </Typography>

                <Typography
                    sx={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#ffffff",
                        lineHeight: 1.1,
                        textAlign: "center",
                        marginBottom: { xs: "auto", md: "9rem" },
                    }}
                >
                    Stars
                </Typography>
            </motion.div>

            {/* Vision Section */}
            <Box
                sx={{
                    // maxWidth: "1200px",
                    width: "100%",
                    marginBottom: { xs: "80px", md: "120px" },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: "20px", md: "0px" },
                    padding: { xs: "0px", md: "0px 40px" },
                }}
            >
                {/* Vision Content - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    sx={{
                        flex: { xs: "1", md: "1" },
                        maxWidth: { xs: "100%", md: "none" }
                    }}
                >
                    <Box sx={{
                        marginBottom: "50px",
                        lineHeight: 1.2,
                        border: "1px solid #ffffff",
                        padding: "5px 20px",
                        position: "relative",
                        display: "inline-block"
                    }}>
                        {/* Corner squares */}
                        <Box sx={{
                            position: "absolute",
                            top: "-10px",
                            left: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            top: "-10px",
                            right: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            top: "-10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            bottom: "-10px",
                            left: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            bottom: "-10px",
                            right: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            bottom: "-10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "var(--font-playfair)",
                                fontStyle: "italic",
                                fontSize: { xs: "2.5rem", sm: "3rem", md: "6rem" },
                                fontWeight: 400,
                                color: "#ffffff",
                            }}
                        >
                            Our
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "var(--font-helvetica)",
                                fontSize: { xs: "2.5rem", sm: "3rem", md: "6rem" },
                                fontWeight: 500,
                                color: "#ffffff",
                                marginLeft: "30px",
                            }}
                        >
                            Vision
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: { xs: "0.9rem", md: "1.5rem" },
                            fontWeight: 300,
                            color: "#E7E7E7",
                            lineHeight: '36px',
                            letterSpacing: '0%',
                            // maxWidth: { xs: "100%", md: "500px" },   
                            width: { xs: "100%", md: "650px" }
                        }}
                    >
                        <span style={{ fontWeight: 700 }}>Aquila, The Hunter</span>: <span>A constellation formed in the shape of an eagle that represents man's strive for greatness, excellence and prowess.</span><br />
                        <span>This constellation is our North Star, our guiding light</span>: <span>It reminds us that our only competition is ourself, our only measure is our life and our only objective is to be better.</span>
                        <span>We aim to transform a system built around static protocols and tiresome rounds into something that provides every user with tools, motivation and incentives to make progress your partner and prowess your goal.</span><span>A system that is built by and for visionaries to team up and make wonders.</span>
                        <span>And that is our vision</span>: <span>To create a culture that grows on your will to get sh*t done.</span>
                    </Typography>
                </motion.div>

                {/* Lightbulb Image - Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={{
                        flex: { xs: "1", md: "1" },
                        textAlign: { xs: "center", md: "right" },
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-end" },
                        alignItems: "center"
                    }}
                >
                    <Box
                        component="img"
                        src="/Bulp.png"
                        alt="Lightbulb"
                        sx={{
                            width: { xs: "200px", md: "300px", lg: "auto" },
                            height: { xs: "auto", md: "auto", lg: "auto" },
                            maxWidth: "100%",
                            filter: "drop-shadow(0px 0px 30px rgba(255, 223, 0, 0.3))",
                        }}
                    />
                </motion.div>
            </Box>

            {/* Mission Section */}
            <Box
                sx={{
                    // maxWidth: "1200px",
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: "40px", md: "60px" },
                    // marginTop: { xs: "60px", md: "100px" },
                    // padding: { xs: "0px", md: "0px 10px" },

                }}
            >
                {/* Target Image - Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    sx={{
                        flex: { xs: "1", md: "1" },
                        textAlign: { xs: "center", md: "left" },
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-start" },
                        alignItems: "center"
                    }}
                >
                    <Box
                        component="img"
                        src="/Target.png"
                        alt="Target"
                        sx={{
                            width: { xs: "200px", md: "300px", lg: "600px" },
                            height: "auto",
                            maxWidth: "100%",
                            marginBottom: "70px",
                            filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.2))",
                        }}
                    />
                </motion.div>

                {/* Mission Content - Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    sx={{
                        flex: { xs: "1", md: "1" },
                        maxWidth: { xs: "100%", md: "597px" },
                        // width: { xs: "100%", md: "597px" }
                    }}
                >
                    <Box sx={{
                        // marginRight:"50px",
                        marginBottom: "50px",
                        border: "1px solid #ffffff",
                        padding: "5px 20px",
                        position: "relative",
                        display: "inline-block",
                        transform: "translateY(-70px)"
                    }}>
                        {/* Corner squares */}
                        <Box sx={{
                            position: "absolute",
                            top: "-10px",
                            left: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            top: "-10px",
                            right: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            top: "-10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            bottom: "-10px",
                            left: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            bottom: "-10px",
                            right: "-10px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Box sx={{
                            position: "absolute",
                            bottom: "-10px",
                            left: "48.5%",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "#ffffff"
                        }} />
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "var(--font-playfair)",
                                fontStyle: "italic",
                                fontSize: { xs: "2.5rem", sm: "3rem", md: "6rem" },
                                fontWeight: 400,
                                color: "#ffffff",
                            }}
                        >
                            Our
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: "var(--font-helvetica)",
                                fontSize: { xs: "2.5rem", sm: "3rem", md: "6rem" },
                                fontWeight: 500,
                                color: "#ffffff",
                                marginLeft: "30px",
                            }}
                        >
                            Mission
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: { xs: "0.9rem", md: "1.5rem" },
                            fontWeight: 300,
                            color: "#E7E7E7",
                            lineHeight: '36px',
                            letterSpacing: '0%',
                            textAlign: "right",
                            width: { xs: "100%", md: "600px" },
                            marginLeft: '-20px',
                            marginTop: "-70px"
                        }}
                    >
                        Our mission is <span style={{ fontWeight: 700 }}>to build a task-first gig marketplace</span> that replaces tiresome hiring, long interviews, and sudden layoffs with something smarter: <span style={{ fontWeight: 700 }}>real work, real outcomes, and real accountability.</span>
                        We connect owners with skilled people who want flexibility without the corporate theater by emphasizing results over resumes.
                        By cutting friction, protecting independence, and rewarding competence, Giggle helps businesses move faster while empowering people to earn on their own terms, proving that work can be efficient, human, and simple.
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}
