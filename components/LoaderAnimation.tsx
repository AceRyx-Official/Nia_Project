'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { initializeGSAP } from '@/lib/gsap-utils';

// ========================================
// CONFIGURATION PARAMETERS - ADJUST THESE
// ========================================

// ROAD CONFIGURATION
const ROAD_CONFIG = {
    width: '35vw',              // Road width
    maxWidth: '600px',          // Maximum road width
    height: '200vh',            // Road height (full viewport)
    tiltAngle: 35,              // Tilt angle towards top (degrees) - higher = more tilted
    perspective: '800px',       // 3D perspective depth
    convergencePercent: 40,     // How much the road narrows at top (0-50, higher = more narrow)
    color: {
        from: '#374151',        // gradient start (gray-700)
        via: '#4b5563',         // gradient middle (gray-600)
        to: '#1f2937',          // gradient end (gray-800)
    }
};

// YELLOW LINE CONFIGURATION
const YELLOW_LINE_CONFIG = {
    width: '6px',               // Width of dashed yellow lines (wider for realism)
    dashHeight: '60px',         // Height of each dash
    gapBetweenDashes: '40px',   // Gap between dashes (creates realistic spacing)
    opacity: 0.9,               // Opacity of yellow lines
    color: '#fbbf24',           // Yellow color (yellow-400)
    positions: [5, 25, 45, 65, 85], // Positions in percentage from top
    animationSpeed: 2,          // Speed of downward movement (seconds for one cycle)
};

// CAR CONFIGURATION
const CAR_CONFIG = {
    width: 140,                 // Car image width (px)
    height: 93,                 // Car image height (px)
    startBottom: '-10%',        // Starting position (bottom of screen)
    endBottom: '105%',          // Ending position (very top of screen)
    startScale: 2,              // Starting scale
    endScale: 0.2,              // Ending scale (smaller at top for perspective)
    animationDuration: 4,       // Animation duration in seconds
    shadowIntensity: 0.95,      // Drop shadow intensity
};

// LOGO CONFIGURATION (for billboard)
const LOGO_CONFIG = {
    width: '100%',               // Logo width as percentage of billboard
    height: '100%',              // Logo height as percentage of billboard
    padding: '1px',            // Padding around logo inside billboard
};

// BACKGROUND CONFIGURATION
const BACKGROUND_CONFIG = {
    enabled: true,              // Enable/disable animated background
    scrollSpeed: 50,            // Speed of downward scroll (seconds for full cycle)
    colors: {
        sky: 'linear-gradient(to bottom, #87CEEB, #E0F6FF, #FFFFFF)',  // Sky blue to white gradient
        buildings: '#2c5282',   // Darker blue building silhouettes
        cranes: '#4a5568',      // Steel gray crane silhouettes
    }
};

// BILLBOARD CONFIGURATION
const BILLBOARD_CONFIG = {
    width: '280px',             // Billboard panel width
    height: '160px',            // Billboard panel height
    tiltX: 5,                   // X-axis tilt (degrees)
    tiltY: 0,                   // Y-axis tilt (degrees)
    tiltZ: 0,                   // Z-axis tilt (degrees)
    startTop: '0%',             // Starting position (above screen)
    endTop: '32%',              // Ending position (center of screen)
    startScale: 0.8,            // Starting scale
    endScale: 2,                // Ending scale
    animationDuration: 3.7,       // Animation duration in seconds
    finalZoomScale: 700,          // Final zoom in scale for panel only (massive zoom fills screen)
    finalZoomTop: '100%',          // Final position after zoom (slightly down from center at 32%)
    finalShiftRight: '3%',        // How far to shift right during zoom (% from center)
    finalZoomDuration: 1.5,     // Duration of final zoom animation
    finalZoomDelay: 0,        // Delay before final zoom starts (after main animation)
    fadeOutDuration: 1,       // Duration of fade-out after zoom
    panelZIndex: 20,            // Z-index for billboard panel (above road)
    postZIndex: -10,            // Z-index for support posts (behind road which is z-10)
    postWidth: '10px',          // Support post width
    postHeight: '90px',         // Support post height
};

// ========================================

interface LoaderAnimationProps {
    onComplete?: () => void;  // Callback when animation completes
}

const LoaderAnimation = ({ onComplete }: LoaderAnimationProps) => {
    const carRef = useRef<HTMLDivElement>(null);
    const roadRef = useRef<HTMLDivElement>(null);
    const billboardRef = useRef<HTMLDivElement>(null);
    const billboardPanelRef = useRef<HTMLDivElement>(null);  // Separate ref for panel-only zoom
    const yellowLinesRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);  // Container for fade-out
    const whiteOverlayRef = useRef<HTMLDivElement>(null);  // White flash overlay
    const bgLayer1Ref = useRef<HTMLDivElement>(null);  // Background layer 1
    const bgLayer2Ref = useRef<HTMLDivElement>(null);  // Background layer 2

    useEffect(() => {
        const initAnimation = async () => {
            const { gsap } = await initializeGSAP();

            if (!carRef.current || !billboardRef.current || !billboardPanelRef.current || !roadRef.current || !yellowLinesRef.current || !containerRef.current || !whiteOverlayRef.current || !bgLayer1Ref.current || !bgLayer2Ref.current) return;

            // Master timeline for synchronized animations
            const tl = gsap.timeline({ defaults: { ease: 'none' } });

            // Set initial states
            gsap.set(billboardRef.current, {
                top: BILLBOARD_CONFIG.startTop,
                scale: BILLBOARD_CONFIG.startScale,
                opacity: 1
            });

            gsap.set(carRef.current, {
                bottom: CAR_CONFIG.startBottom,
                scale: CAR_CONFIG.startScale,
                opacity: 1
            });

            // Animate yellow lines moving downward infinitely (creates forward motion illusion)
            gsap.to(yellowLinesRef.current, {
                y: '20%',
                duration: YELLOW_LINE_CONFIG.animationSpeed,
                ease: 'none',
                repeat: -1,
                modifiers: {
                    y: (y) => `${parseFloat(y) % 20}%`
                }
            });

            // Animate background layers moving downward (parallax effect)
            if (BACKGROUND_CONFIG.enabled) {
                gsap.to(bgLayer1Ref.current, {
                    y: '100%',
                    duration: BACKGROUND_CONFIG.scrollSpeed,
                    ease: 'none',
                    repeat: -1
                });
                gsap.to(bgLayer2Ref.current, {
                    y: '100%',
                    duration: BACKGROUND_CONFIG.scrollSpeed * 0.7,
                    ease: 'none',
                    repeat: -1
                });
            }

            // Synchronized animation sequence - car moves from bottom to very top
            tl.to(carRef.current, {
                bottom: CAR_CONFIG.endBottom,
                scale: CAR_CONFIG.endScale,
                duration: CAR_CONFIG.animationDuration,
                ease: 'power1.inOut'
            }, 0)
                .to(billboardRef.current, {
                    top: BILLBOARD_CONFIG.endTop,
                    scale: BILLBOARD_CONFIG.endScale,
                    duration: BILLBOARD_CONFIG.animationDuration,
                    ease: 'power2.inOut'
                }, 0)
                // Final zoom - ONLY the billboard panel (not legs) zooms in MASSIVELY to fill screen
                .to(billboardPanelRef.current, {
                    scale: BILLBOARD_CONFIG.finalZoomScale,
                    duration: BILLBOARD_CONFIG.finalZoomDuration,
                    ease: 'power3.in'
                }, BILLBOARD_CONFIG.animationDuration + BILLBOARD_CONFIG.finalZoomDelay)
                .to(billboardRef.current, {
                    yPercent: parseInt(BILLBOARD_CONFIG.finalZoomTop),  // Move down (positive = down)
                    xPercent: parseInt(BILLBOARD_CONFIG.finalShiftRight), // Move right (positive = right)
                    duration: BILLBOARD_CONFIG.finalZoomDuration,
                    ease: 'power3.in'
                }, BILLBOARD_CONFIG.animationDuration + BILLBOARD_CONFIG.finalZoomDelay)
                // White flash - fade in white overlay during zoom
                .to(whiteOverlayRef.current, {
                    opacity: 1,
                    duration: BILLBOARD_CONFIG.finalZoomDuration,
                    ease: 'power2.in'
                }, BILLBOARD_CONFIG.animationDuration + BILLBOARD_CONFIG.finalZoomDelay)
                // Fade out entire loader (including white overlay)
                .to(containerRef.current, {
                    opacity: 0,
                    duration: BILLBOARD_CONFIG.fadeOutDuration,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        // Call the completion callback to show main content
                        if (onComplete) onComplete();
                    }
                }, BILLBOARD_CONFIG.animationDuration + BILLBOARD_CONFIG.finalZoomDelay + BILLBOARD_CONFIG.finalZoomDuration);
        };

        initAnimation();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: BACKGROUND_CONFIG.colors.sky, perspective: '1000px' }}>
            {/* Animated 3D Construction Background - Layer 1 (slower) - Left side */}
            <div ref={bgLayer1Ref} className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-40" style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${ROAD_CONFIG.tiltAngle}deg)`,
                transformOrigin: 'center bottom',
                willChange: 'transform'
            }}>
                {/* Buildings on left side of road */}
                <div className="absolute bottom-0 left-[5%] w-20 h-96 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-200px) rotateY(15deg)',
                    boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.5)'
                }}></div>
                <div className="absolute bottom-0 left-[15%] w-16 h-64 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-150px) rotateY(10deg)',
                    boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.5)'
                }}></div>
                <div className="absolute bottom-0 left-[25%] w-24 h-80 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-100px) rotateY(5deg)',
                    boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.5)'
                }}></div>

                {/* Buildings on right side of road */}
                <div className="absolute bottom-0 right-[5%] w-20 h-88 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-200px) rotateY(-15deg)',
                    boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.5)'
                }}></div>
                <div className="absolute bottom-0 right-[15%] w-18 h-72 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-150px) rotateY(-10deg)',
                    boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.5)'
                }}></div>
                <div className="absolute bottom-0 right-[25%] w-22 h-96 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-100px) rotateY(-5deg)',
                    boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.5)'
                }}></div>

                {/* 3D Crane - Left */}
                <div className="absolute bottom-0 left-[10%]" style={{ transform: 'translateZ(-180px)' }}>
                    <div className="w-3 h-[500px] origin-bottom" style={{
                        backgroundColor: BACKGROUND_CONFIG.colors.cranes,
                        boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.6)'
                    }}></div>
                    <div className="absolute top-20 -right-24 w-48 h-2" style={{
                        backgroundColor: BACKGROUND_CONFIG.colors.cranes,
                        transform: 'rotateZ(-10deg)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.6)'
                    }}></div>
                </div>
            </div>

            {/* Animated 3D Construction Background - Layer 2 (faster) */}
            <div ref={bgLayer2Ref} className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-30" style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${ROAD_CONFIG.tiltAngle}deg)`,
                transformOrigin: 'center bottom',
                willChange: 'transform'
            }}>
                {/* Buildings - closer to road */}
                <div className="absolute bottom-0 left-[20%] w-16 h-56 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-80px) rotateY(8deg)',
                    boxShadow: 'inset -8px 0 15px rgba(0,0,0,0.5)'
                }}></div>
                <div className="absolute bottom-0 right-[20%] w-16 h-64 origin-bottom" style={{
                    backgroundColor: BACKGROUND_CONFIG.colors.buildings,
                    transform: 'translateZ(-80px) rotateY(-8deg)',
                    boxShadow: 'inset 8px 0 15px rgba(0,0,0,0.5)'
                }}></div>

                {/* 3D Crane - Right */}
                <div className="absolute bottom-0 right-[12%]" style={{ transform: 'translateZ(-120px)' }}>
                    <div className="w-3 h-[400px] origin-bottom" style={{
                        backgroundColor: BACKGROUND_CONFIG.colors.cranes,
                        boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.6)'
                    }}></div>
                    <div className="absolute top-24 -left-20 w-40 h-2" style={{
                        backgroundColor: BACKGROUND_CONFIG.colors.cranes,
                        transform: 'rotateZ(10deg)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.6)'
                    }}></div>
                </div>
            </div>

            {/* White flash overlay */}
            <div
                ref={whiteOverlayRef}
                className="absolute inset-0 bg-white z-50 pointer-events-none"
                style={{ opacity: 0 }}
            ></div>

            {/* Road - Tilted towards top with perspective */}
            <div
                ref={roadRef}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    width: ROAD_CONFIG.width,
                    maxWidth: ROAD_CONFIG.maxWidth,
                    height: ROAD_CONFIG.height,
                    perspective: ROAD_CONFIG.perspective,
                    transformStyle: 'preserve-3d',
                }}
            >
                <div
                    className="relative w-full h-full"
                    style={{
                        background: `linear-gradient(to top, ${ROAD_CONFIG.color.from}, ${ROAD_CONFIG.color.via}, ${ROAD_CONFIG.color.to})`,
                        transform: `rotateX(${ROAD_CONFIG.tiltAngle}deg)`,
                        transformOrigin: 'center bottom',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 -2px 10px rgba(0,0,0,0.5)',
                        clipPath: `polygon(
                            ${ROAD_CONFIG.convergencePercent}% 0%, 
                            ${100 - ROAD_CONFIG.convergencePercent}% 0%, 
                            100% 100%, 
                            0% 100%
                        )`,
                    }}
                >
                    {/* Yellow dashed center lines - wider with gaps - animated container */}
                    <div ref={yellowLinesRef} className="absolute inset-0">
                        {YELLOW_LINE_CONFIG.positions.map((position, index) => (
                            <div
                                key={index}
                                className="absolute left-1/2 -translate-x-1/2"
                                style={{
                                    top: `${position}%`,
                                    width: YELLOW_LINE_CONFIG.width,
                                    height: YELLOW_LINE_CONFIG.dashHeight,
                                    backgroundColor: YELLOW_LINE_CONFIG.color,
                                    opacity: YELLOW_LINE_CONFIG.opacity,
                                    borderRadius: '2px',
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animated Car - centered on road, moving bottom to very top */}
            <div
                ref={carRef}
                className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                style={{
                    filter: `drop-shadow(0 35px 70px rgba(0,0,0,${CAR_CONFIG.shadowIntensity}))`,
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

            {/* Billboard */}
            <div
                ref={billboardRef}
                className="absolute left-1/2 -translate-x-1/2 z-20"
            >
                <div
                    className="relative"
                    style={{
                        transform: `rotateX(${BILLBOARD_CONFIG.tiltX}deg) rotateY(${BILLBOARD_CONFIG.tiltY}deg) rotateZ(${BILLBOARD_CONFIG.tiltZ}deg)`,
                    }}
                >
                    {/* Billboard panel - zooms separately at end */}
                    <div
                        ref={billboardPanelRef}
                        className="relative rounded-xl overflow-hidden"
                        style={{
                            backgroundColor: '#013f90',
                            zIndex: BILLBOARD_CONFIG.panelZIndex,
                            width: BILLBOARD_CONFIG.width,
                            height: BILLBOARD_CONFIG.height,
                            boxShadow:
                                '0 25px 50px rgba(0,0,0,0.6), 0 10px 20px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
                            border: '3px solid #2d3748',
                            borderRadius: '12px',
                        }}
                    >
                        {/* Logo Image */}
                        <div className="absolute inset-0 flex items-center justify-center" style={{ padding: LOGO_CONFIG.padding }}>
                            <Image
                                src="/Nia Logo.svg"
                                alt="NIA Construction Logo"
                                width={240}
                                height={240}
                                style={{
                                    width: LOGO_CONFIG.width,
                                    height: LOGO_CONFIG.height,
                                    objectFit: 'contain'
                                }}
                                priority
                            />
                        </div>

                        {/* Corners */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-red-500/60"></div>
                        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-red-500/60"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-red-500/60"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-red-500/60"></div>
                    </div>

                    {/* Support posts - behind road */}
                    <div
                        className="absolute left-[5%] -bottom-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-2xl"
                        style={{
                            zIndex: BILLBOARD_CONFIG.postZIndex,
                            width: BILLBOARD_CONFIG.postWidth,
                            height: BILLBOARD_CONFIG.postHeight,
                            borderRadius: '2px',
                            boxShadow:
                                '0 10px 30px rgba(0,0,0,0.7), inset 1px 0 1px rgba(255,255,255,0.2), inset -1px 0 1px rgba(0,0,0,0.3)',
                        }}
                    ></div>

                    <div
                        className="absolute right-[5%] -bottom-20 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 shadow-2xl"
                        style={{
                            zIndex: BILLBOARD_CONFIG.postZIndex,
                            width: BILLBOARD_CONFIG.postWidth,
                            height: BILLBOARD_CONFIG.postHeight,
                            borderRadius: '2px',
                            boxShadow:
                                '0 10px 30px rgba(0,0,0,0.7), inset 1px 0 1px rgba(255,255,255,0.2), inset -1px 0 1px rgba(0,0,0,0.3)',
                        }}
                    ></div>

                    {/* Bottom plates */}
                    <div className="absolute left-[3%] -bottom-20 w-8 h-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded shadow-xl"></div>
                    <div className="absolute right-[3%] -bottom-20 w-8 h-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded shadow-xl"></div>
                </div>
            </div>
        </section>
    );
}
export default LoaderAnimation;
