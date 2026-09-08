import { Link } from 'react-router-dom';
import type { Projeto } from '../types/Nucti';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  projeto: Projeto;
}

export default function ProjectCard({ projeto }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <img src={projeto.fotos[0]} alt={projeto.titulo} className={styles.image} />
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