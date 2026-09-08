import { siteContent } from '../data/content';
import type { Projeto, MembroEquipe } from '../types/Nucti';
import ProjectCard from '../components/ProjectCard';
import TeamCard from '../components/TeamCard';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      {/* Quem Somos */}
      <section id="quemsomos" className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteContent.quemSomos.titulo}</h1>
          <p className={styles.heroText}>{siteContent.quemSomos.descricao}</p>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src={siteContent.quemSomos.imagem} alt="Espaço NucTI" className={styles.heroImage} />
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
        <div className={styles.projectsGrid}>
          {siteContent.projetos.map((proj: Projeto) => (
            <ProjectCard key={proj.id} projeto={proj} />
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className={styles.section}>
        <h2 className={styles.sectionTitle}>Nossa Equipe</h2>
        <div className={styles.teamGrid}>
          {siteContent.equipe.map((membro: MembroEquipe, index: number) => (
            <TeamCard key={index} membro={membro} />
          ))}
        </div>
      </section>
    </div>
  );
}