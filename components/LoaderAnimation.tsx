'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Exo_2 } from 'next/font/google';
import { initializeGSAP } from '@/lib/gsap-utils';

const exo2 = Exo_2({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
});

interface LoaderAnimationProps {
    onComplete?: () => void;  // Callback when animation completes
}

const LoaderAnimation = ({ onComplete }: LoaderAnimationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLDivElement>(null);

    // Tagline for the typewriter effect
    const selectedTagline = "VISION VALUE VICTORY";

    useEffect(() => {
        const initAnimation = async () => {
            const { gsap } = await initializeGSAP();

            if (!containerRef.current || !logoRef.current || !taglineRef.current) return;

            // Create master timeline
            const tl = gsap.timeline({
                defaults: { ease: 'power2.out' },
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            // Set initial states
            gsap.set(logoRef.current, {
                opacity: 0,
                scale: 0.9,
                y: -20
            });

            gsap.set(taglineRef.current, {
                opacity: 0
            });

            // Simple, clean animation sequence
            tl
                // Logo entrance
                .to(logoRef.current, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                })
                // Small delay
                .to({}, { duration: 0.5 })
                // Fade in tagline container
                .to(taglineRef.current, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                })
                // Fade in each word one by one
                .add(() => {
                    const taglineElement = taglineRef.current;

                    if (taglineElement) {
                        const wordSpans = taglineElement.querySelectorAll('.fade-word');

                        // Fade in each word with stagger (no movement, just fade)
                        wordSpans.forEach((wordSpan, wordIndex) => {
                            gsap.to(wordSpan, {
                                opacity: 1,
                                duration: 0.8,
                                delay: wordIndex * 0.5,
                                ease: 'power2.out'
                            });
                        });
                    }
                })
                // Hold
                .to({}, { duration: 2.5 })
                // Fade out
                .to(containerRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.inOut'
                });
        };

        initAnimation();
    }, [onComplete]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#F9E4BC]"
        >
            {/* Pure white background - no decorative elements */}

            {/* Logo Container - MUCH BIGGER */}
            <div
                ref={logoRef}
                className="relative flex items-center justify-center mb-4 z-10"
            >
                <Image
                    src="/nia final logo.jpg"
                    alt="Nia Logo"
                    width={700}
                    height={700}
                    className="w-96 md:w-[550px] lg:w-[650px] xl:w-[700px] h-auto object-contain"
                    style={{ border: 'none', outline: 'none', boxShadow: 'none', mixBlendMode: 'multiply', opacity: 0.95 }}
                    priority
                />
            </div>

            {/* Tagline - MASSIVE TEXT */}
            <div
                ref={taglineRef}
                className="text-center px-6 max-w-[95vw] z-10"
            >
                <p className={`text-gray-700 tracking-wide leading-tight ${exo2.className}`} style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', fontWeight: '700', wordSpacing: '0.3em', textShadow: '0 2px 8px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08)' }}>
                    <span className="fade-word" style={{ opacity: 0, marginRight: '0.5em',color:"#4053A2" }}>VISION</span>
                    <span className="fade-word" style={{ opacity: 0, marginRight: '0.5em',color:"#4053A2" }}>VALUE</span>
                    <span className="fade-word" style={{ opacity: 0,color:"#4053A2" }}>VICTORY</span>
                </p>
            </div>

            <style jsx>{`
                .fade-word {
                    display: inline-block;
                }
                
                @keyframes pulse-slow {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.5;
                    }
                }

                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default LoaderAnimation;
