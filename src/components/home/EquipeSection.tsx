import { siteContent } from '../../data/content';
import TeamCard from '../TeamCard';

export default function EquipeSection() {
  return (
    <section className="section">
      <h2>Equipe</h2>
      <div className="grid grid--team">
        {siteContent.equipe.map((membro) => (
          <TeamCard key={membro.nome} membro={membro} />
        ))}
      </div>
    </section>
  );
}