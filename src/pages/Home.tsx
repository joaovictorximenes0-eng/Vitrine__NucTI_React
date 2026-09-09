import { useState } from 'react';
import { siteContent } from '../data/content';
import type { MembroEquipe } from '../types/Nucti';
import TeamCard from '../components/TeamCard';
import ProjectCarousel from '../components/ProjectCarousel';
import styles from './Home.module.css';

export default function Home() {
  const [membroFiltro, setMembroFiltro] = useState<string | null>(null);

  const handleFilterClick = (membroId: string) => {
    if (membroFiltro === membroId) {
      setMembroFiltro(null);
    } else {
      setMembroFiltro(membroId);
      document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Seção Quem Somos */}
      <section id="quemsomos" className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteContent.quemSomos.titulo}</h1>
          <p className={styles.heroText}>{siteContent.quemSomos.descricao}</p>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src={siteContent.quemSomos.imagem} alt="Espaço NucTI" className={styles.heroImage} />
        </div>
      </section>

      {/* Seção Projetos com Carrossel Avançado */}
      <section id="projetos" className={styles.section}>
        <div className={styles.headerProjetos}>
          <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
          {membroFiltro && (
            <p className={styles.filterHint}>
              Destacando projetos de <strong>{siteContent.equipe.find(m => m.id === membroFiltro)?.nome}</strong>
            </p>
          )}
        </div>

        {/* Novo Carrossel com Física de Travamento e Aceleração */}
        <ProjectCarousel 
          projetos={siteContent.projetos} 
          membroFiltro={membroFiltro} 
        />
      </section>

      {/* Seção Equipe */}
      <section id="equipe" className={styles.section}>
        <h2 className={styles.sectionTitle}>Nossa Equipe</h2>
        <div className={styles.teamGrid}>
          {siteContent.equipe.map((membro: MembroEquipe) => (
            <TeamCard 
              key={membro.id} 
              membro={membro} 
              isFilterActive={membroFiltro === membro.id}
              onFilterClick={() => handleFilterClick(membro.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}