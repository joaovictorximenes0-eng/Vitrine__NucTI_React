import type { MembroEquipe } from '../types/Nucti';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  membro: MembroEquipe;
}

export default function TeamCard({ membro }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <img src={membro.foto} alt={membro.nome} className={styles.avatar} />
      <h4 className={styles.name}>{membro.nome}</h4>
      <span className={styles.role}>{membro.cargo}</span>
    </div>
  );
}