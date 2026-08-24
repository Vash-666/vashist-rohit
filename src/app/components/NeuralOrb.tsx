"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface NeuralOrbProps {
  mouseX: number;
  mouseY: number;
  scrollProgress: any;
}

export default function NeuralOrb({ mouseX, mouseY, scrollProgress }: NeuralOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const orbX = useSpring(0, { stiffness: 50, damping: 20 });
  const orbY = useSpring(0, { stiffness: 50, damping: 20 });
  const orbScale = useTransform(scrollProgress, [0, 0.3], [1, 0.5]);
  const orbOpacity = useTransform(scrollProgress, [0, 0.3], [0.4, 0.1]);

  useEffect(() => {
    orbX.set(mouseX * 20);
    orbY.set(mouseY * 20);
  }, [mouseX, mouseY, orbX, orbY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    let time = 0;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const nodeCount = 12;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      nodes.push({
        x: centerX + Math.cos(angle) * 150,
        y: centerY + Math.sin(angle) * 150,
        vx: 0,
        vy: 0,
      });
    }

    const animate = () => {
      time += 0.005;
      
      ctx.fillStyle = "rgba(10, 10, 11, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const pulse = Math.sin(time * 2) * 0.5 + 0.5;
      const radius = 200 + pulse * 30;

      // Draw connections
      ctx.strokeStyle = `rgba(201, 168, 76, ${0.15 * pulse})`;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 300) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        const angle = time + (i / nodeCount) * Math.PI * 2;
        const targetX = centerX + Math.cos(angle) * radius;
        const targetY = centerY + Math.sin(angle) * radius;
        
        node.vx += (targetX - node.x) * 0.02;
        node.vy += (targetY - node.y) * 0.02;
        node.vx *= 0.95;
        node.vy *= 0.95;
        node.x += node.vx;
        node.y += node.vy;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${0.6 * pulse})`;
        ctx.fill();
      });

      // Draw center glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius * 0.8
      );
      gradient.addColorStop(0, `rgba(201, 168, 76, ${0.2 * pulse})`);
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        x: orbX,
        y: orbY,
        scale: orbScale,
        opacity: orbOpacity,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: "blur(1px)" }}
      />
    </motion.div>
  );
}
