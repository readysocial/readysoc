"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  life: number;
};

const COLORS = ["#f6535b", "#ffb4b8", "#38bdf8", "#fbbf24", "#34d399", "#c084fc"];

type ConfettiBurstProps = {
  active: boolean;
};

export default function ConfettiBurst({ active }: ConfettiBurstProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let running = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 140 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      return {
        x: canvas.width * (0.35 + Math.random() * 0.3),
        y: canvas.height * 0.25,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        size: 4 + Math.random() * 6,
        rotation: Math.random() * 360,
        rotationSpeed: -6 + Math.random() * 12,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 1,
      };
    });

    const draw = () => {
      if (!running) return;
      frame += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.vy += 0.18;
        p.vx *= 0.995;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.life -= 0.008;

        if (p.life <= 0) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      if (frame < 220) {
        raf = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
