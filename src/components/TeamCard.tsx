import type { MembroEquipe } from '../types/Nucti';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  membro: MembroEquipe;
  isFilterActive: boolean;
  onFilterClick: () => void;
}

export default function TeamCard({ membro, isFilterActive, onFilterClick }: TeamCardProps) {
  return (
    <div className={`${styles.card} ${isFilterActive ? styles.cardActive : ''}`}>
      {/* Área superior */}
      <div className={styles.topArea}>
        <img src={membro.foto} alt={membro.nome} className={styles.avatar} />

        {/* Redes Sociais FIXAS (sempre visíveis) */}
        {membro.redesSociais && (
          <div className={styles.redesSociais}>
            {membro.redesSociais.linkedin && (
              <a href={membro.redesSociais.linkedin} target="_blank" rel="noreferrer" className={styles.icone} title="LinkedIn">in</a>
            )}
            {membro.redesSociais.github && (
              <a href={membro.redesSociais.github} target="_blank" rel="noreferrer" className={styles.icone} title="GitHub">gh</a>
            )}
            {membro.redesSociais.instagram && (
              <a href={membro.redesSociais.instagram} target="_blank" rel="noreferrer" className={styles.icone} title="Instagram">ig</a>
            )}
          </div>
        )}
      </div>

      {/* Área inferior */}
      <div className={styles.textContainer}>
        <h4 className={styles.name}>{membro.nome}</h4>
        <span className={styles.role}>{membro.cargo}</span>
        
        {/* Novo botão de Filtro SVG */}
        <button 
          className={`${styles.filterBtn} ${isFilterActive ? styles.filterBtnActive : ''}`}
          onClick={onFilterClick}
          title="Ver projetos deste membro"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.filterIcon}>
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          {isFilterActive ? 'Remover Filtro' : 'Ver Projetos'}
        </button>
      </div>
    </div>
  );
}