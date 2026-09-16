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
  const [changingImg, setChangingImg] = useState<boolean>(false);

  useEffect(() => {
    let enabled = true
    async function changeImg() {
      let i = 0;
      while (enabled && projeto.fotos.length > 1){
        await wait((Math.random()*6000)+4000)
        i = i+1 >= projeto.fotos.length ? 0 : i+1;
        setChangingImg(true)
        await wait(125)
        setActualImg(i);
        setChangingImg(false)
        await wait(125)
      }
    }

    changeImg();
    return () => {
        enabled = false;
    };
  },[projeto.fotos.length]);

  return (
    <article className={styles.card}>
      <div className={styles.image_background}>
        <img 
          alt={projeto.titulo} 
          className={`${styles.image} ${changingImg && styles.image_transition}`}
          src={projeto.fotos[actuaImg]} 
        />
      </div>
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