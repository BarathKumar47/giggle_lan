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
            duration: 1.5, // Increased for longer, smoother inertia
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High-inertia exponential easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.1, // Slightly increased responsiveness
            smoothTouch: false,
            touchMultiplier: 2.5, // Better feel on trackpads/touch
            infinite: false,
            syncTouch: true, // Sync scroll with touch movement
        });

        lenisRef.current = lenis;

        // Synchronize AOS with Lenis scroll
        // Only refresh AOS if the scroll position actually changed enough
        let lastScrollTime = 0;
        lenis.on('scroll', () => {
            const now = Date.now();
            if (now - lastScrollTime > 50) { // Throttle AOS refresh to 20fps for performance
                AOS.refresh();
                lastScrollTime = now;
            }
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
