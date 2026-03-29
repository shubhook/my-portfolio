import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const chaosRef = useRef({ active: false, stars: [], tintColor: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 10000);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          parallaxFactor: Math.random() * 0.5 + 0.5,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const chaos = chaosRef.current;
      const stars = chaos.active ? chaos.stars : starsRef.current;

      stars.forEach(star => {
        const offsetX = (mouseRef.current.x - canvas.width / 2) * star.parallaxFactor * 0.01;
        const offsetY = (mouseRef.current.y - canvas.height / 2) * star.parallaxFactor * 0.01;

        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      if (chaos.active && chaos.tintColor) {
        ctx.fillStyle = chaos.tintColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      drawStars();
    };

    resizeCanvas();
    drawStars();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const TINT_COLORS = [
      'rgba(255, 107, 107, 0.05)',
      'rgba(255, 217, 61, 0.05)',
      'rgba(107, 203, 119, 0.05)',
      'rgba(77, 150, 255, 0.05)',
      'rgba(199, 125, 255, 0.05)',
    ];
    let konamiIndex = 0;
    let chaosTimeout = null;
    let tintInterval = null;

    const activateChaos = () => {
      if (chaosRef.current.active) return;

      console.log('%c CHAOS MODE ', 'background: #FF6B6B; color: #0c0c0c; font-weight: bold; font-size: 16px; padding: 4px 8px;');

      const canvas = canvasRef.current;
      const original = starsRef.current;
      const chaosStars = [
        ...original.map(s => ({ ...s, opacity: Math.min(s.opacity * 3, 1) })),
        ...Array.from({ length: original.length }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          parallaxFactor: Math.random() * 0.5 + 0.5,
        })),
      ];

      let colorIndex = 0;
      chaosRef.current = { active: true, stars: chaosStars, tintColor: TINT_COLORS[0] };

      tintInterval = setInterval(() => {
        colorIndex = (colorIndex + 1) % TINT_COLORS.length;
        chaosRef.current.tintColor = TINT_COLORS[colorIndex];
      }, 300);

      chaosTimeout = setTimeout(() => {
        clearInterval(tintInterval);
        chaosRef.current = { active: false, stars: [], tintColor: null };
      }, 3000);
    };

    const handleKonami = (e) => {
      if (e.key === KONAMI[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI.length) {
          konamiIndex = 0;
          activateChaos();
        }
      } else {
        konamiIndex = e.key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', handleKonami);
    return () => {
      window.removeEventListener('keydown', handleKonami);
      if (chaosTimeout) clearTimeout(chaosTimeout);
      if (tintInterval) clearInterval(tintInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default StarryBackground;
