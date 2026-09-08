import { siteContent } from '../../data/content';
import ProjectCard from '../ProjectCard';

export default function ProjetosSection() {
  return (
    <section className="section">
      <h2>Projetos</h2>
      <div className="grid">
        {siteContent.projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}