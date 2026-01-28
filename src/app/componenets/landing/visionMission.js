"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Crosshair = React.forwardRef(({ sx, squareSide = "left" }, ref) => (
    <Box
        ref={ref}
        sx={{
            position: "absolute",
            width: { xs: "30px", md: "45px" },
            height: { xs: "30px", md: "45px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            ...sx
        }}
    >
        {/* The Square (Top-Left or Top-Right) */}
        <Box
            sx={{
                position: "absolute",
                width: { xs: "12px", md: "22px" },
                height: { xs: "12px", md: "22px" },
                backgroundColor: "#ffffff",
                top: 10,
                [squareSide]: 10,
            }}
        />
        {/* The Plus Symbol (Centered) - with fade out animation */}
        <Box
            component={motion.div}
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            sx={{
                position: "absolute",
                width: { xs: "20px", md: "30px" },
                height: { xs: "20px", md: "30px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bottom: -10,
                right: squareSide === "left" ? 0 : "auto",
                left: squareSide === "right" ? -10 : 25,
            }}
        >
            {/* Horizontal Line */}
            <Box sx={{ position: "absolute", width: "100%", height: "5px", backgroundColor: "#ffffff" }} />
            {/* Vertical Line */}
            <Box sx={{ position: "absolute", width: "5px", height: "100%", backgroundColor: "#ffffff" }} />
        </Box>
    </Box>
));
Crosshair.displayName = "Crosshair";

const MotionCrosshair = motion(Crosshair);

export default function VisionMission() {
    return (
        <>
            {/* Black Blend Layer */}
            <Box
                sx={{
                    // position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "150px",
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    zIndex: 1,
                    // mixBlendMode: "screen",
                    pointerEvents: "none"
                }}
            />
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
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1.2
                }}
                viewport={{ once: true }}
                style={{
                    textAlign: "center",
                    marginBottom: "80px",
                }}
            >
                {/* <Box
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
                </Box> */}

                <Typography
                    sx={{
                        fontFamily: "var(--font-roboto)",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        fontWeight: 500,
                        color: "#ffffff",
                        lineHeight: 1.1,
                        marginBottom: "0px",
                    }}
                >
                    Our Guiding
                </Typography>

                <Typography
                    component="button"
                    onClick={() => {
                        const element = document.getElementById('brandlogo');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    sx={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#ffffff",
                        lineHeight: 1.1,
                        textAlign: "center",
                        marginBottom: { xs: "2rem", md: "9rem" },
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "color 0.3s ease",
                        "&:hover": {
                            color: "rgba(255, 255, 255, 0.7)",
                        },
                        "&:focus": {
                            outline: "none",
                            color: "rgba(255, 255, 255, 0.7)",
                        },
                    }}
                >
                    Stars
                </Typography>
            </motion.div>

            {/* Vision Section */}
            <Box
                sx={{
                    width: "100%",
                    marginBottom: { xs: "80px", md: "120px" },
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                    gap: { xs: "40px", md: "0" },
                    padding: { xs: "0px 20px", md: "0px 40px" },
                }}
            >
                {/* Vision Content - Left Side */}
                <Box
                    sx={{
                        flex: { xs: "1", md: "1" },
                        maxWidth: { xs: "100%", md: "none" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" }
                    }}
                >
                    <Box
                        sx={{
                            display: "block",
                            position: "relative",
                            marginBottom: "50px",
                            maxWidth: "fit-content",
                            margin: { xs: "0 auto 50px auto", md: "0 0 50px 0" }
                        }}
                    >
                        {/* 1. Static Anchor Square (Stays at TL) */}
                        <Box
                            component={motion.div}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            sx={{
                                position: "absolute",
                                top: { xs: "-5px", md: "-10px" },
                                left: { xs: "-5px", md: "-10px" },
                                width: { xs: "10px", md: "20px" },
                                height: { xs: "10px", md: "20px" },
                                backgroundColor: "#ffffff",
                                zIndex: 3
                            }}
                        />

                        {/* 2. Traveling Crosshair (Moves from TL to BR) */}
                        <MotionCrosshair
                            squareSide="left"
                            initial={{ top: 0, left: 0 }}
                            whileInView={{ top: "100%", left: "100%" }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            sx={{
                                transform: "translate(-50%, -50%)",
                            }}
                        />

                        {/* 3. Expansion Wrapper (Box and Content Box) */}
                        <Box
                            component={motion.div}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            sx={{
                                transformOrigin: "top left",
                                position: "relative",
                                display: "inline-block"
                            }}
                        >
                            {/* Simple squares that slide out from TL */}
                            {[
                                { top: { xs: "-5px", md: "-10px" }, right: { xs: "-5px", md: "-10px" } }, // TR
                                { bottom: { xs: "-5px", md: "-10px" }, left: { xs: "-5px", md: "-10px" } }, // BL
                                { top: { xs: "-5px", md: "-10px" }, left: "50%", transform: "translateX(-50%)" }, // TC
                                { bottom: { xs: "-5px", md: "-5px" }, left: "50%", transform: "translateX(-50%)" }, // BC
                                { left: { xs: "-5px", md: "-10px" }, top: "50%", transform: "translateY(-50%)" }, // LC
                                { right: { xs: "-5px", md: "-10px" }, top: "50%", transform: "translateY(-50%)" }  // RC
                            ].map((pos, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        position: "absolute",
                                        width: { xs: "10px", md: "20px" },
                                        height: { xs: "10px", md: "20px" },
                                        backgroundColor: "#ffffff",
                                        zIndex: 1,
                                        ...pos
                                    }}
                                />
                            ))}

                            {/* The Border & Content Box */}
                            <Box sx={{
                                lineHeight: 1.2,
                                border: "1px solid #ffffff",
                                padding: { xs: "5px 12px", md: "5px 30px" },
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            }}>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: "var(--font-playfair)",
                                        fontStyle: "italic",
                                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                                        fontWeight: 400,
                                        color: "#ffffff",
                                        textShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    Our
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: "var(--font-helvetica)",
                                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                                        fontWeight: 500,
                                        color: "#ffffff",
                                        marginLeft: { xs: "15px", md: "30px" },
                                        textShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    Vision
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: { xs: "0.9rem", md: "1.125rem" },
                            fontWeight: 300,

                            color: "#E7E7E7",
                            lineHeight: { xs: "1.6", md: "1.8" },
                            letterSpacing: "0.2px",
                            width: { xs: "100%", md: "550px" },
                            textAlign: { xs: "justify", md: "justify" },
                        }}
                    >
                        <span style={{ fontWeight: 700 }}>Aquila, The Hunter</span>: <span>A constellation formed in the shape of an eagle that represents man's strive for greatness, excellence and prowess.</span><br />
                        <span>This constellation is our North Star, our guiding light</span>: <span>It reminds us that our only competition is ourself, our only measure is our life and our only objective is to be better.</span><br />
                        <span>We aim to transform a system built around static protocols and tiresome rounds into something that provides every user with tools, motivation and incentives to make progress your partner and prowess your goal.</span><span>A system that is built by and for visionaries to team up and make wonders.</span><br />
                        <span>And that is our vision</span>: <span>To create a culture that grows on your will to get sh*t done.</span>
                    </Typography>
                </Box>

                {/* Lightbulb Image - Right Side */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: 100, rotate: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1 }}
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
                            width: { xs: "180px", sm: "220px", md: "380px", lg: "auto" },
                            height: "auto",
                            maxWidth: "100%",
                            filter: "drop-shadow(0px 0px 30px rgba(255, 223, 0, 0.3))",
                        }}
                    />
                </Box>
            </Box>

            {/* Mission Section */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                    gap: { xs: "40px", md: "40px" },
                    padding: { xs: "0px 20px", md: "0px 40px" },
                }}
            >
                {/* Target Image - Left Side */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: -100, rotate: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
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
                            width: { xs: "150px", sm: "180px", md: "300px", lg: "600px" },
                            height: "auto",
                            maxWidth: "100%",
                            marginBottom: { xs: "40px", md: "70px" },
                            filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.2))",
                        }}
                    />
                </Box>

                {/* Mission Content - Right Side */}
                <Box
                    sx={{
                        flex: { xs: "1", md: "1" },
                        maxWidth: { xs: "100%", md: "597px" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-end" },
                    }}
                >
                    <Box
                        sx={{
                            display: "block",
                            position: "relative",
                            marginBottom: { xs: "30px", md: "50px" },
                            transform: { xs: "translateY(-40px)", md: "translateY(-70px)" },
                            maxWidth: "fit-content",
                            margin: { xs: "0 auto 30px auto", md: "0 0 50px 0" }
                        }}
                    >
                        {/* 1. Static Anchor Square (Stays at TR) */}
                        <Box
                            component={motion.div}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            sx={{
                                position: "absolute",
                                top: { xs: "-5px", md: "-10px" },
                                right: { xs: "-5px", md: "-10px" },
                                width: { xs: "10px", md: "20px" },
                                height: { xs: "10px", md: "20px" },
                                backgroundColor: "#ffffff",
                                zIndex: 3
                            }}
                        />

                        {/* 2. Traveling Crosshair (Moves from TR to BL) */}
                        <MotionCrosshair
                            squareSide="right"
                            initial={{ top: 0, left: "100%" }}
                            whileInView={{ top: "100%", left: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            sx={{
                                transform: "translate(-50%, -50%)",
                            }}
                        />

                        {/* 3. Expansion Wrapper (Box and content) */}
                        <Box
                            component={motion.div}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            sx={{
                                transformOrigin: "top right",
                                position: "relative",
                                display: "inline-block"
                            }}
                        >
                            {/* Simple squares that slide out from TR */}
                            {[
                                { top: { xs: "-5px", md: "-10px" }, left: { xs: "-5px", md: "-10px" } }, // TL
                                { bottom: { xs: "-5px", md: "-10px" }, right: { xs: "-5px", md: "-10px" } }, // BR
                                { top: { xs: "-5px", md: "-10px" }, left: "50%", transform: "translateX(-50%)" }, // TC
                                { bottom: { xs: "-5px", md: "-5px" }, left: "50%", transform: "translateX(-50%)" }, // BC
                                { left: { xs: "-5px", md: "-10px" }, top: "50%", transform: "translateY(-50%)" }, // LC
                                { right: { xs: "-5px", md: "-10px" }, top: "50%", transform: "translateY(-50%)" }  // RC
                            ].map((pos, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        position: "absolute",
                                        width: { xs: "10px", md: "20px" },
                                        height: { xs: "10px", md: "20px" },
                                        backgroundColor: "#ffffff",
                                        zIndex: 1,
                                        ...pos
                                    }}
                                />
                            ))}

                            {/* The Border & Content Box */}
                            <Box sx={{
                                lineHeight: 1.2,
                                border: "1px solid #ffffff",
                                padding: { xs: "5px 12px", md: "5px 30px" },
                                position: "relative",
                                display: "flex",
                                justifyContent: { xs: "center", md: "end" },
                                alignItems: "center",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            }}>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: "var(--font-playfair)",
                                        fontStyle: "italic",
                                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                                        fontWeight: 400,
                                        color: "#ffffff",
                                        textShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    Our
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: "var(--font-helvetica)",
                                        fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                                        fontWeight: 500,
                                        color: "#ffffff",
                                        marginLeft: { xs: "15px", md: "30px" },
                                        textShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    Mission
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: "var(--font-inter)",
                            fontSize: { xs: "0.9rem", md: "1.125rem" },
                            fontWeight: 300,
                            color: "#E7E7E7",
                            lineHeight: { xs: "1.6", md: "1.8" },
                            letterSpacing: "0.2px",
                            textAlign: { xs: "justify", md: "justify" },
                            width: { xs: "100%", md: "550px" },
                            marginTop: { xs: "-40px", md: "-50px" }
                        }}
                    >
                        Our mission is <span style={{ fontWeight: 700 }}>to build a task-first gig marketplace</span> that replaces tiresome hiring, long interviews, and sudden layoffs with something smarter: <span style={{ fontWeight: 700 }}>real work, real outcomes, and real accountability.</span><br />
                        We connect owners with skilled people who want flexibility without the corporate theater by emphasizing results over resumes.<br />
                        By cutting friction, protecting independence, and rewarding competence, Giggle helps businesses move faster while empowering people to earn on their own terms, proving that work can be efficient, human, and simple.
                    </Typography>
                </Box>
            </Box>
            </Box>
        </>
    );
}
