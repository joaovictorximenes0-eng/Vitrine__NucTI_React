import { useState, useRef, useEffect } from 'react';
import type { Projeto } from '../types/Nucti';
import ProjectCard from './ProjectCard';
import styles from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  projetos: Projeto[];
  membroFiltro: string | null;
}

export default function ProjectCarousel({ projetos, membroFiltro }: ProjectCarouselProps) {
  const carouselItems = [...projetos, ...projetos, ...projetos];

  const [trackOffset, setTrackOffset] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const speedRef = useRef<number>(0.8);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      setTrackOffset((prevOffset) => {
        const cardWidth = 380;
        const gap = 32;
        const totalLoopWidth = projetos.length * (cardWidth + gap);

        let newOffset = prevOffset + speedRef.current;

        if (newOffset >= totalLoopWidth) newOffset %= totalLoopWidth;
        if (newOffset < 0) newOffset = totalLoopWidth - 1;

        return newOffset;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [projetos.length]);

  const handleSpeedChange = (multiplier: number) => {
    speedRef.current = multiplier;
  };

  return (
    <div className={styles.carouselWrapper}>
      <button
        className={`${styles.navControl} ${styles.navLeft}`}
        onMouseEnter={() => handleSpeedChange(-3.5)}
        onMouseLeave={() => handleSpeedChange(0.8)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        className={`${styles.navControl} ${styles.navRight}`}
        onMouseEnter={() => handleSpeedChange(3.5)}
        onMouseLeave={() => handleSpeedChange(0.8)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${trackOffset}px)` }}
      >
        {carouselItems.map((proj, index) => {
          const isHovered = hoveredIndex === index;
          const isRelated = membroFiltro ? proj.membrosIds?.includes(membroFiltro) : true;
          const isDimmed = membroFiltro ? !isRelated : false;

          return (
            <div
              key={`${proj.id}-${index}`}
              className={`${styles.carouselItem} ${isHovered ? styles.itemHovered : ''} ${isDimmed ? styles.dimmed : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard projeto={proj} />
            </div>
          );
        })}
      </div>
    </div>
  );
}