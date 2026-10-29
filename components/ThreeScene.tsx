"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  className?: string;
  variant?: "hero" | "ambient";
}

export default function ThreeScene({ className, variant = "hero" }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Constellation / Wave Particle Field
    const particleCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 1.8 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      originalPositions[i] = positions[i];
      originalPositions[i + 1] = positions[i + 1];
      originalPositions[i + 2] = positions[i + 2];
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x94a3b8, // slate-400
      size: 0.05,
      transparent: true,
      opacity: 0.85,
    });
    const pointsField = new THREE.Points(geometry, particleMaterial);
    group.add(pointsField);

    // 2. Interactive Wireframe Polyhedron
    const polyGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const polyMat = new THREE.MeshBasicMaterial({
      color: 0x64748b, // slate-500
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const polyMesh = new THREE.Mesh(polyGeo, polyMat);
    group.add(polyMesh);

    // 3. Floating Orbital Rings
    const ringGeo = new THREE.TorusGeometry(2.1, 0.015, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // subtle cyan/sky accent
      transparent: true,
      opacity: 0.35,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 4;
    group.add(ring2);

    // Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetMouseX = x * 0.7;
      targetMouseY = y * 0.7;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Group rotation combining gentle continuous spin and mouse response
      group.rotation.y = elapsedTime * 0.15 + currentMouseX;
      group.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + currentMouseY;

      // Pulsing polyMesh
      polyMesh.rotation.y -= 0.003;
      polyMesh.rotation.z += 0.002;
      const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      polyMesh.scale.set(scale, scale, scale);

      // Orbital rings rotation
      ring.rotation.z += 0.004;
      ring2.rotation.z -= 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      polyGeo.dispose();
      polyMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className || "w-full h-full min-h-[300px] flex items-center justify-center select-none pointer-events-none"}
      aria-hidden="true"
    />
  );
}
