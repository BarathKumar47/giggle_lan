"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
        // Custom font variants
        helvetica: {
            fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
        },
        serif: {
            fontFamily: '"Playfair Display", Georgia, serif',
        },
    },
});

export default theme;
