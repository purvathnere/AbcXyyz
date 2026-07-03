import React, { useEffect, useState } from 'react';

export default function Background() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate a fixed set of particles with randomized properties
    const types = ['heart', 'sparkle', 'bubble'];
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage left
      y: Math.random() * 100, // starting height percentage
      size: Math.random() * 20 + 10, // size in pixels
      delay: Math.random() * 8, // animation delay in seconds
      duration: Math.random() * 12 + 10, // floating duration (10s to 22s)
      type: types[Math.floor(Math.random() * types.length)],
      opacity: Math.random() * 0.4 + 0.2, // subtle transparency
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="background-decorations">
      {particles.map((p) => {
        const style = {
          left: `${p.x}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          opacity: p.opacity,
          position: 'absolute',
          bottom: '-50px',
        };

        if (p.type === 'heart') {
          return (
            <svg
              key={p.id}
              style={style}
              className="float-particle heart-particle"
              viewBox="0 0 24 24"
              fill="rgba(244, 63, 94, 0.6)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          );
        } else if (p.type === 'sparkle') {
          return (
            <svg
              key={p.id}
              style={style}
              className="float-particle sparkle-particle"
              viewBox="0 0 24 24"
              fill="rgba(253, 224, 71, 0.7)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          );
        } else {
          return (
            <div
              key={p.id}
              style={{
                ...style,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
              }}
              className="float-particle bubble-particle"
            />
          );
        }
      })}
    </div>
  );
}
