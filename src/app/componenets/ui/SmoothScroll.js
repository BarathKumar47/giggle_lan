"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // 1. Initialize AOS
        AOS.init({
            duration: 800,
            once: false, // Whether animation should happen only once - while scrolling up and down
            easing: 'ease-out-cubic',
        });

        // 2. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Synchronize AOS with Lenis scroll
        lenis.on('scroll', () => {
            AOS.refresh();
        });

        // 3. Use requestAnimationFrame to update Lenis on every frame
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 4. Handle Window Resize
        const handleResize = () => {
            AOS.refresh();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>{children}</>;
}
