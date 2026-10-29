"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Sleek Outer Wireframe Icosahedron
    const geo = new THREE.IcosahedronGeometry(1.6, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x71717a, // neutral-500
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const mesh = new THREE.Mesh(geo, wireframeMat);
    group.add(mesh);

    // 2. Vertex Points for tech depth
    const pointsMat = new THREE.PointsMaterial({
      color: 0xa1a1aa, // neutral-400
      size: 0.04,
      transparent: true,
      opacity: 0.75,
    });
    const points = new THREE.Points(geo, pointsMat);
    group.add(points);

    // 3. Inner subtle core
    const innerGeo = new THREE.OctahedronGeometry(0.8, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x52525b,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Mouse parallax tracking
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth idle rotation
      group.rotation.y += 0.003;
      group.rotation.x += 0.0015;

      // Mouse smoothing
      group.rotation.y += (targetX - group.rotation.y) * 0.04;
      group.rotation.x += (targetY - group.rotation.x) * 0.04;

      innerMesh.rotation.y -= 0.005;
      innerMesh.rotation.z += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      wireframeMat.dispose();
      pointsMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[220px] max-h-[340px] flex items-center justify-center relative select-none pointer-events-none"
      aria-hidden="true"
    />
  );
}
