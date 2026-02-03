'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { initializeGSAP } from '@/lib/gsap-utils';

// ========================================
// CONFIGURATION PARAMETERS - ADJUST THESE
// ========================================

// BILLBOARD IMAGE CONFIGURATION
const BILLBOARD_IMAGE_CONFIG = {
    width: '70vw',              // Billboard width as viewport width (e.g., '70vw' = 70% of screen width)
    maxWidth: '900px',          // Maximum billboard width (px)
    height: 'auto',             // Billboard height (auto maintains aspect ratio)
    top: '35%',                 // Vertical position (% from top, 50% = center)
    left: '50%',                // Horizontal position (% from left, 50% = center)
    tiltX: 0,                   // X-axis tilt/rotation in degrees (positive = tilt down, negative = tilt up)
    tiltY: 0,                   // Y-axis tilt/rotation in degrees (positive = rotate right, negative = rotate left)
    tiltZ: 0,                   // Z-axis rotation in degrees (positive = rotate clockwise, negative = counterclockwise)
    scale: 1,                   // Scale multiplier (1 = normal size, 1.5 = 150% size, etc.)
    opacity: 1,                 // Opacity (0 = invisible, 1 = fully visible)
    zIndex: 20,                 // Z-index layering (higher = more in front)
    shadow: '0 30px 60px rgba(0,0,0,0.5)', // Drop shadow (CSS box-shadow)
};

// BILLBOARD CONTAINER ANIMATION CONFIGURATION
const BILLBOARD_ANIMATION_CONFIG = {
    startScale: 1,              // Starting scale (1 = normal size)
    endScale: 3,                // Ending scale (2 = double size, zoom in effect)
    moveDownPercent: '80%',     // How far to move down during animation (% of container height)
    duration: 6,                // Animation duration in seconds (synced with car)
};

// CAR CONFIGURATION
const CAR_CONFIG = {
    width: 140,                 // Car image width (px)
    height: 93,                 // Car image height (px)
    startBottom: '-10%',        // Starting position (bottom of screen)
    endBottom: '55%',          // Ending position (very top of screen)
    startScale: 3,              // Starting scale
    endScale: 0.2,              // Ending scale (smaller at top for perspective)
    animationDuration: 4,       // Animation duration in seconds
    shadowIntensity: 0.95,      // Drop shadow intensity
    zIndex: 10,
};

// ========================================

interface LoaderAnimationProps {
    onComplete?: () => void;  // Callback when animation completes
}

const LoaderAnimation = ({ onComplete }: LoaderAnimationProps) => {
    const carRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);  // Container for fade-out
    const billboardContainerRef = useRef<HTMLDivElement>(null);  // Container for billboard + background


    useEffect(() => {
        const initAnimation = async () => {
            const { gsap } = await initializeGSAP();

            if (!carRef.current || !containerRef.current || !billboardContainerRef.current) return;

            // Master timeline for synchronized animations
            const tl = gsap.timeline({ defaults: { ease: 'none' } });

            // Set initial states
            gsap.set(carRef.current, {
                bottom: CAR_CONFIG.startBottom,
                scale: CAR_CONFIG.startScale,
                opacity: 1
            });

            gsap.set(billboardContainerRef.current, {
                scale: BILLBOARD_ANIMATION_CONFIG.startScale,
                opacity: 1
            });

            // Synchronized animation sequence - car moves from bottom to top, billboard/background scales up and moves down
            tl.to(carRef.current, {
                bottom: CAR_CONFIG.endBottom,
                scale: CAR_CONFIG.endScale,
                duration: CAR_CONFIG.animationDuration,
                ease: 'power1.inOut'
            }, 0)
                // Scale and move billboard container down as car moves
                .to(billboardContainerRef.current, {
                    scale: BILLBOARD_ANIMATION_CONFIG.endScale,
                    y: BILLBOARD_ANIMATION_CONFIG.moveDownPercent,
                    duration: BILLBOARD_ANIMATION_CONFIG.duration,
                    ease: 'power1.inOut'
                }, 0)
                // Fade out entire loader
                .to(containerRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // Call the completion callback to show main content
                        if (onComplete) onComplete();
                    }
                }, CAR_CONFIG.animationDuration);
        };

        initAnimation();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden" style={{
            perspective: '1000px',
            backgroundColor: '#000'
        }}>
            {/* Billboard + Background Container - Scales together */}
            <div
                ref={billboardContainerRef}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    transformOrigin: 'center center',
                }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(/LoaderAnimationbg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0,
                    }}
                />

                {/* Animated Car - Above background, below billboard */}
                <div
                    ref={carRef}
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        filter: `drop-shadow(0 35px 70px rgba(0,0,0,${CAR_CONFIG.shadowIntensity}))`,
                        zIndex: CAR_CONFIG.zIndex,
                    }}
                >
                    <Image
                        src="/whitecarback.png"
                        alt="Animated Car"
                        width={CAR_CONFIG.width}
                        height={CAR_CONFIG.height}
                        className="w-28 md:w-36 h-auto"
                        priority
                    />
                </div>

                {/* Billboard Image - Centered and Configurable */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: BILLBOARD_IMAGE_CONFIG.top,
                        left: BILLBOARD_IMAGE_CONFIG.left,
                        transform: `translate(-50%, -50%) 
                                    rotateX(${BILLBOARD_IMAGE_CONFIG.tiltX}deg) 
                                    rotateY(${BILLBOARD_IMAGE_CONFIG.tiltY}deg) 
                                    rotateZ(${BILLBOARD_IMAGE_CONFIG.tiltZ}deg) 
                                    scale(${BILLBOARD_IMAGE_CONFIG.scale})`,
                        opacity: BILLBOARD_IMAGE_CONFIG.opacity,
                        zIndex: BILLBOARD_IMAGE_CONFIG.zIndex,
                        width: BILLBOARD_IMAGE_CONFIG.width,
                        maxWidth: BILLBOARD_IMAGE_CONFIG.maxWidth,
                        height: BILLBOARD_IMAGE_CONFIG.height,
                        filter: `drop-shadow(${BILLBOARD_IMAGE_CONFIG.shadow})`,
                    }}
                >
                    <Image
                        src="/billboard.jpg"
                        alt="Billboard"
                        width={900}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}
export default LoaderAnimation;
