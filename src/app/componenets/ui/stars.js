"use client";

import * as React from "react";
import { Box } from "@mui/material";
import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";

function generateStars(count, starColor) {
    const shadows = [];
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 4000) - 2000;
        const y = Math.floor(Math.random() * 4000) - 2000;
        shadows.push(`${x}px ${y}px ${starColor}`);
    }
    return shadows.join(", ");
}

function StarLayer({
    count = 1000,
    size = 1,
    transition = { repeat: Infinity, duration: 50, ease: "linear" },
    starColor = "#fff",
    sx,
    ...props
}) {
    const [boxShadow, setBoxShadow] = React.useState("");

    React.useEffect(() => {
        setBoxShadow(generateStars(count, starColor));
    }, [count, starColor]);

    return (
        <motion.div
            animate={{ y: [0, -2000] }}
            transition={transition}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "2000px",
                ...sx
            }}
            {...props}
        >
            <Box
                sx={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: boxShadow,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    borderRadius: "50%",
                    top: "2000px",
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: boxShadow,
                }}
            />
        </motion.div>
    );
}

export function StarsBackground({
    children,
    factor = 0.05,
    speed = 50,
    transition = { stiffness: 50, damping: 20 },
    starColor = "#fff",
    sx,
    ...props
}) {
    const offsetX = useMotionValue(0);
    const offsetY = useMotionValue(0);

    const springX = useSpring(offsetX, transition);
    const springY = useSpring(offsetY, transition);

    const handleMouseMove = React.useCallback(
        (e) => {
            if (typeof window === "undefined") return;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const newOffsetX = -(e.clientX - centerX) * factor;
            const newOffsetY = -(e.clientY - centerY) * factor;
            offsetX.set(newOffsetX);
            offsetY.set(newOffsetY);
        },
        [offsetX, offsetY, factor],
    );

    return (
        <Box
            onMouseMove={handleMouseMove}
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background: "transparent",
                ...sx
            }}
            {...props}
        >
            <motion.div style={{ x: springX, y: springY }}>
                <StarLayer
                    count={1000}
                    size={1}
                    transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
                    starColor={starColor}
                />
                <StarLayer
                    count={400}
                    size={2}
                    transition={{
                        repeat: Infinity,
                        duration: speed * 2,
                        ease: "linear",
                    }}
                    starColor={starColor}
                />
                <StarLayer
                    count={200}
                    size={3}
                    transition={{
                        repeat: Infinity,
                        duration: speed * 3,
                        ease: "linear",
                    }}
                    starColor={starColor}
                />
            </motion.div>
            {children}
        </Box>
    );
}
