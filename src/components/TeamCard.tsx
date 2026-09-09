import type { MembroEquipe } from '../types/Nucti';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  membro: MembroEquipe;
}

export default function TeamCard({ membro }: TeamCardProps) {
  return (
    <div className={styles.card}>
      {/* Área superior (Tela em branco / Foto) */}
      <div className={styles.topArea}>
        <img src={membro.foto} alt={membro.nome} className={styles.avatar} />

        {/* Círculos brancos das redes sociais sobre a foto */}
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

      {/* Área inferior (Texto que arria no hover) */}
      <div className={styles.textContainer}>
        <h4 className={styles.name}>{membro.nome}</h4>
        <span className={styles.role}>{membro.cargo}</span>
      </div>
    </div>
  );
}