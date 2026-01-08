"use client";
import { useRef, useLayoutEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function SymbolModel() {
    const groupRef = useRef<THREE.Group>(null);
    const { viewport } = useThree();

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Rotation simple - consomme très peu
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    useLayoutEffect(() => {
        if (!groupRef.current) return;
        const mobile = window.innerWidth < 768;

        // Position initiale
        groupRef.current.position.set(0, 0, 0);
        groupRef.current.scale.set(mobile ? 1.5 : 2.5, mobile ? 1.5 : 2.5, mobile ? 1.5 : 2.5);

        const stickX = mobile ? 1.5 : 3.8;
        const stickY = mobile ? -1.0 : -1.8;
        const stickScale = mobile ? 0.6 : 0.9;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "2500px top",
                scrub: 1,
            }
        });

        tl.to({}, { duration: 1 })
            .to(groupRef.current.position, {
                x: stickX,
                y: stickY,
                ease: "power2.inOut",
                duration: 1.5
            })
            .to(groupRef.current.scale, {
                x: stickScale,
                y: stickScale,
                z: stickScale,
                ease: "power2.inOut",
                duration: 1.5
            }, "<")
            .to(groupRef.current.position, {
                y: stickY + 12,
                ease: "power1.in",
                duration: 2
            });
    }, [viewport]);

    // IMPORTANT: Utilise un chemin local pour éviter les requêtes réseau lentes
    const fontUrl = "/Portfolio/fonts/helvetiker_bold.typeface.json";

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Center>
                    <Text3D
                        font={fontUrl}
                        size={1}
                        height={0.1}
                        curveSegments={4} // Optimisation majeure : moins de polygones
                        bevelEnabled={false} // Optimisation : pas de calculs de bordures
                    >
                        {"</>"}
                        {/* Matériau standard : beaucoup plus léger que PhysicalMaterial */}
                        <meshStandardMaterial
                            color="#8b5cf6"
                            metalness={0.6}
                            roughness={0.4}
                            emissive="#4c1d95"
                        />
                    </Text3D>
                </Center>
            </Float>
        </group>
    );
}

export default function CodeSymbol3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 12], fov: 45 }}
                // gl: optimisation des performances navigateur
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    precision: "lowp" // Réduit la précision des calculs pour économiser la batterie
                }}
                dpr={[1, 1.5]} // Limite la résolution sur les écrans 4K/Retina pour soulager le GPU
            >
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <SymbolModel />
            </Canvas>
        </div>
    );
}