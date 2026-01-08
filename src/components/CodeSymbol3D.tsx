"use client";
import { useRef, useLayoutEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center, Float, Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function SymbolModel() {
    const groupRef = useRef<THREE.Group>(null);
    const { viewport } = useThree();
    const [isMobile, setIsMobile] = useState(false);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    useLayoutEffect(() => {
        if (!groupRef.current) return;

        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);

        groupRef.current.position.set(0, 0, 0);
        groupRef.current.scale.set(mobile ? 1.2 : 2.2, mobile ? 1.2 : 2.2, mobile ? 1.2 : 2.2);

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

        tl.to({}, { duration: 1 });
        tl.to(groupRef.current.position, {
            x: stickX,
            y: stickY,
            z: 0,
            ease: "power2.inOut",
            duration: 1.5
        })
            .to(groupRef.current.scale, {
                x: stickScale,
                y: stickScale,
                z: stickScale,
                ease: "power2.inOut",
                duration: 1.5
            }, "<");

        tl.to({}, { duration: 1.5 });
        tl.to(groupRef.current.position, {
            y: stickY + 12,
            ease: "power1.in",
            duration: 2
        });

    }, [viewport]);

    const fontUrl = "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

    const material = new THREE.MeshPhysicalMaterial({
        color: "#8b5cf6", emissive: "#4c1d95", metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1
    });
    const materialSlash = new THREE.MeshPhysicalMaterial({
        color: "#5605bfff", emissive: "#500abaff", metalness: 0.8, roughness: 0.2, reflectivity: 1, clearcoat: 1
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Center>
                    <Text3D font={fontUrl} size={1} height={0.2} curveSegments={12} bevelEnabled bevelThickness={0.03} bevelSize={0.02} material={material}>{"<"}</Text3D>
                    <Text3D position={[0.9, 0, 0]} font={fontUrl} size={1} height={0.2} curveSegments={12} bevelEnabled bevelThickness={0.03} bevelSize={0.02} material={materialSlash}>{"/"}</Text3D>
                    <Text3D position={[1.6, 0, 0]} font={fontUrl} size={1} height={0.2} curveSegments={12} bevelEnabled bevelThickness={0.03} bevelSize={0.02} material={material}>{">"}</Text3D>
                </Center>
            </Float>
        </group>
    );
}

export default function CodeSymbol3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#d946ef" />
                <Environment preset="city" />
                <SymbolModel />
            </Canvas>
        </div>
    );
}