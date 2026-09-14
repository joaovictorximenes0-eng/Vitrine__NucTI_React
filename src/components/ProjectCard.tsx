import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Projeto } from '../types/Nucti';
import styles from './ProjectCard.module.css';
interface ProjectCardProps {
  projeto: Projeto;
}

const wait = (milissegundos: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milissegundos));
};

export default function ProjectCard({ projeto }: ProjectCardProps) {
  const [actuaImg, setActualImg] = useState<number>(0);
  
  useEffect(() => {
    let enabled = true
    async function changeImg() {
      let i = 0;
      while (enabled && projeto.fotos.length > 1){
        console.log("a")
        await wait((Math.random()*6000)+4000)
        i = i+1 >= projeto.fotos.length ? 0 : i+1;
        setActualImg(i);
      }
    }

    changeImg();
    return () => {
        enabled = false;
    };
  },[projeto.fotos.length]);

  return (
    <article className={styles.card}>
      <img 
        alt={projeto.titulo} 
        className={styles.image} 
        src={projeto.fotos[actuaImg]} 
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{projeto.titulo}</h3>
        <p className={styles.description}>{projeto.resumo}</p>
        <Link to={`/projetos/${projeto.id}`} className={styles.link}>
          Ver projeto →
        </Link>
      </div>
    </article>
  );
}