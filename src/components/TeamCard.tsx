import type { MembroEquipe } from '../types/Nucti';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  membro: MembroEquipe;
}

export default function TeamCard({ membro }: TeamCardProps) {
  return (
    <div className={styles.card}>
      <img src={membro.foto} alt={membro.nome} className={styles.avatar} />
      
      <div className={styles.nomeContainer}>
        <h4 className={styles.name}>{membro.nome}</h4>
        
        {/* Redes sociais que aparecem no hover */}
        {membro.redesSociais && (
          <div className={styles.redesSociais}>
            {membro.redesSociais.linkedin && (
              <a href={membro.redesSociais.linkedin} target="_blank" rel="noreferrer" className={styles.icone} title="LinkedIn">
                in
              </a>
            )}
            {membro.redesSociais.github && (
              <a href={membro.redesSociais.github} target="_blank" rel="noreferrer" className={styles.icone} title="GitHub">
                gh
              </a>
            )}
            {membro.redesSociais.instagram && (
              <a href={membro.redesSociais.instagram} target="_blank" rel="noreferrer" className={styles.icone} title="Instagram">
                ig
              </a>
            )}
          </div>
        )}
      </div>

      <span className={styles.role}>{membro.cargo}</span>
    </div>
  );
}