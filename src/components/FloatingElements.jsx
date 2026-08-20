import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  // Generate random positions and animation properties for the floating particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // random start X %
    y: Math.random() * 100, // random start Y %
    size: Math.random() * 20 + 10, // random size between 10 and 30px
    duration: Math.random() * 10 + 10, // random duration between 10 and 20s
    delay: Math.random() * 5, // random delay
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0.2,
            x: `${p.x}vw`,
            y: `110vh`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: `-10vh`,
            x: [`${p.x}vw`, `${p.x + (Math.random() * 20 - 10)}vw`]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
