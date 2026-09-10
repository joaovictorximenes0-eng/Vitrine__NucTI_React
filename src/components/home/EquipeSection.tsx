import type { MembroEquipe } from '../../types/Nucti';
import TeamCard from '../TeamCard';
import styles from './EquipeSection.module.css';

interface EquipeSectionProps {
  professores: MembroEquipe[];
  alunos: MembroEquipe[];
  membroFiltro: string | null;
  onFilterClick: (id: string) => void;
}

export default function EquipeSection({
  professores,
  alunos,
  membroFiltro,
  onFilterClick,
}: EquipeSectionProps) {
  // Ordenação alfabética por nome
  const alunosOrdenados = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));
  const professoresOrdenados = [...professores].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <section id="equipe" className={styles.equipeContainer}>
      <h2 className={styles.mainTitle}>Nossa Equipe</h2>

      {/* 1. LINE-UP: PROFESSORES */}
      <div className={styles.groupBlock}>
        <h3 className={styles.subTitle}>Professores</h3>
        <div className={styles.teamGrid}>
          {professoresOrdenados.map((prof) => (
            <TeamCard
              key={prof.id}
              membro={prof}
              isFilterActive={membroFiltro === prof.id}
              onFilterClick={() => onFilterClick(prof.id)}
            />
          ))}
        </div>
      </div>

      {/* 2. LINE-UP: ALUNOS (Sem distinções entre bolsas, em ordem alfabética) */}
      <div className={styles.groupBlock}>
        <h3 className={styles.subTitle}>Alunos</h3>
        <div className={styles.teamGrid}>
          {alunosOrdenados.map((aluno) => (
            <TeamCard
              key={aluno.id}
              membro={aluno}
              isFilterActive={membroFiltro === aluno.id}
              onFilterClick={() => onFilterClick(aluno.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}