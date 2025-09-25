import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Props and Trail Types
interface TextCursorProps {
  text?: React.ReactNode; // Cursor symbol
  parentRef: React.RefObject<HTMLDivElement | null>; // Element to track mouse
  delay?: number;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

// Main Component
const TextCursor: React.FC<TextCursorProps> = ({
  text = '⚛️',
  parentRef,
  delay = 0.01,
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  // State & Refs
  const [trail, setTrail] = useState<TrailItem[]>([]); // Stores trail points
  const idCounter = React.useRef(0); // Unique ID counter
  const lastMoveTimeRef = React.useRef(Date.now()); // Track last movement for cleanup

  // Mouse Movement Handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parentRef.current) return;
      const rect = parentRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      setTrail(prev => {
        let newTrail = [...prev];
        const last = newTrail[newTrail.length - 1];
        const dx = last ? mouseX - last.x : 0;
        const dy = last ? mouseY - last.y : 0;
        const distance = last ? Math.sqrt(dx * dx + dy * dy) : spacing;

        if (!last || distance >= spacing) {
          const angle = last && followMouseDirection ? (Math.atan2(dy, dx) * 180) / Math.PI : 0;
          newTrail.push({
            id: idCounter.current++,
            x: mouseX,
            y: mouseY,
            angle,
            ...(randomFloat && {
              randomX: Math.random() * 10 - 5,
              randomY: Math.random() * 10 - 5,
              randomRotate: Math.random() * 10 - 5
            })
          });
        }

        if (newTrail.length > maxPoints) newTrail = newTrail.slice(newTrail.length - maxPoints);
        lastMoveTimeRef.current = Date.now();
        return newTrail;
      });
    };

    // Trail Cleanup Interval
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);

    const parent = parentRef.current;
    parent?.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      parent?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [parentRef, spacing, followMouseDirection, randomFloat, removalInterval, maxPoints]);

  // Render Trail
  return (
    <div
      className="text-cursor-container"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 999 }}
    >
      <AnimatePresence>
        {trail.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 1, rotate: item.angle }}
            animate={{
              opacity: 1,
              x: randomFloat ? [0, item.randomX || 0, 0] : 0,
              y: randomFloat ? [0, item.randomY || 0, 0] : 0,
              rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              opacity: { duration: exitDuration, ease: 'easeOut', delay },
              ...(randomFloat && {
                x: { duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
                y: { duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
                rotate: { duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
              })
            }}
            style={{ position: 'absolute', left: item.x, top: item.y, fontSize: '24px', userSelect: 'none' }}
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextCursor;