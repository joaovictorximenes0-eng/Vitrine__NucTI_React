import type { MembroEquipe } from '../types/Nucti';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  membro: MembroEquipe;
  isFilterActive: boolean;
  onFilterClick: () => void;
}

interface SocialDivProps {
  member: MembroEquipe;
  mode: 'normal' | 'mobile'
}

function SocialDiv({member, mode} : SocialDivProps){
  return (
    <div className={mode == "mobile" ? styles.redesSociais__mobile : styles.redesSociais}>
      {member.redesSociais?.linkedin && (
        <a href={member.redesSociais.linkedin} target="_blank" rel="noreferrer" className={styles.icone} title="LinkedIn" id="linkedin-icon">
          <img src="./src/imgs/social-icons/square-linkedin-brands-solid-full.svg" alt="Rede Social LinkedIn" />
        </a>
      )}
      {member.redesSociais?.github && (
        <a href={member.redesSociais.github} target="_blank" rel="noreferrer" className={styles.icone} title="GitHub">
          <img src="./src/imgs/social-icons/github-brands-solid-full.svg" alt="Rede Social Github" />
        </a>
      )}
      {member.redesSociais?.instagram && (
        <a href={member.redesSociais.instagram} target="_blank" rel="noreferrer" className={styles.icone} title="Instagram">
            <img src="./src/imgs/social-icons/instagram-brands-solid-full.svg" alt="Rede Social Instagram" />
        </a>
      )}
    </div>
  )
}

export default function TeamCard({ membro, isFilterActive, onFilterClick }: TeamCardProps) {
  return (
    <div className={`${styles.card} ${isFilterActive ? styles.cardActive : ''}`}>
      {/* Área superior */}
      <div className={styles.topArea}>
        <img src={membro.foto} alt={membro.nome} className={styles.avatar} />

        {/* Redes Sociais FIXAS (sempre visíveis) */}
        {membro.redesSociais && (
          <SocialDiv member={membro} mode='normal'/>
        )}
      </div>

      {/* Área inferior */}
      <div className={styles.textContainer}>
        <h4 className={styles.name}>{membro.title ? membro.title+' ' : ''}{membro.nome}</h4>
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
        <div>
          <SocialDiv member={membro} mode='mobile'/>
        </div>
      </div>

    </div>
  );
}