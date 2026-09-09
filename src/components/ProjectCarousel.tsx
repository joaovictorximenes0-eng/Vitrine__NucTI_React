import { useState, useRef, useEffect } from 'react';
import type { Projeto } from '../types/Nucti';
import ProjectCard from './ProjectCard';
import styles from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  projetos: Projeto[];
  membroFiltro: string | null;
}

export default function ProjectCarousel({ projetos, membroFiltro }: ProjectCarouselProps) {
  // Duplicamos a lista para permitir loop infinito contínuo
  const carouselItems = [...projetos, ...projetos, ...projetos];

  const [trackOffset, setTrackOffset] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Guardamos o ponto onde o carrossel estava quando o card foi sobrevoado
  const hoverStartOffsetRef = useRef<number>(0);
  const speedRef = useRef<number>(0.8); // Velocidade padrão
  const requestRef = useRef<number | null>(null);

  // Loop de Animação de alta performance (60/120 fps)
  useEffect(() => {
    const animate = () => {
      setTrackOffset((prevOffset) => {
        const itemWidth = 380 + 32; // Largura do card + Gap
        const totalLoopWidth = projetos.length * itemWidth;
        
        let newOffset = prevOffset + speedRef.current;

        // Reseta o offset sem salto visual ao completar uma volta
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

  // Congela o card no momento em que o mouse entra
  const handleMouseEnterCard = (index: number) => {
    setHoveredIndex(index);
    hoverStartOffsetRef.current = trackOffset;
  };

  const handleMouseLeaveCard = () => {
    setHoveredIndex(null);
  };

  // Controles de velocidade pelas setas nas extremidades
  const handleSpeedChange = (multiplier: number) => {
    speedRef.current = multiplier;
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* Seta de Aceleração Esquerda (Inverte/Acelera) */}
      <button 
        className={`${styles.navControl} ${styles.navLeft}`}
        onMouseEnter={() => handleSpeedChange(-3.5)}
        onMouseLeave={() => handleSpeedChange(0.8)}
        aria-label="Acelerar para esquerda"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Seta de Aceleração Direita (Acelera para frente) */}
      <button 
        className={`${styles.navControl} ${styles.navRight}`}
        onMouseEnter={() => handleSpeedChange(3.5)}
        onMouseLeave={() => handleSpeedChange(0.8)}
        aria-label="Acelerar para direita"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Track que desliza */}
      <div 
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${trackOffset}px)` }}
      >
        {carouselItems.map((proj, index) => {
          const isHovered = hoveredIndex === index;
          
          // Calcula a compensação inversa para travar o card na posição da tela
          const deltaOffset = isHovered ? trackOffset - hoverStartOffsetRef.current : 0;

          // Lógica do filtro por membro
          const isRelated = membroFiltro ? proj.membrosIds?.includes(membroFiltro) : true;
          const isDimmed = membroFiltro ? !isRelated : false;

          return (
            <div 
              key={`${proj.id}-${index}`}
              className={`${styles.carouselItem} ${isHovered ? styles.cardFrozen : ''} ${isDimmed ? styles.dimmed : ''}`}
              style={{
                // Move o card na direção oposta à pista para mantê-lo estático na tela
                transform: isHovered 
                  ? `translateX(${deltaOffset}px) scale(1.08)` 
                  : 'none'
              }}
              onMouseEnter={() => handleMouseEnterCard(index)}
              onMouseLeave={handleMouseLeaveCard}
            >
              <ProjectCard projeto={proj} />
            </div>
          );
        })}
      </div>
    </div>
  );
}