import { useParams, Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const projeto = siteContent.projetos.find((p) => p.id === id);

  if (!projeto) {
    return (
      <div className={styles.container} style={{ textAlign: 'center', paddingTop: '60px' }}>
        <h2>Projeto não encontrado!</h2>
        <Link to="/" className={styles.backLink}>Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Voltar
      </Link>

      <h1 className={styles.title}>{projeto.titulo}</h1>
      <p className={styles.description}>{projeto.descricaoCompleta}</p>

      <h3 className={styles.galleryTitle}>Galeria do Projeto</h3>
      <div className={styles.gallery}>
        {projeto.fotos.map((foto, index) => (
          <img 
            key={index} 
            src={foto} 
            alt={`Foto ${index + 1}`} 
            className={styles.photo}
          />
        ))}
      </div>

      <div className={styles.ctaBox}>
        <h3 className={styles.ctaTitle}>Tenho interesse neste projeto</h3>
        <p className={styles.ctaText}>
          Preencha o formulário específico para participar do processo seletivo ou receber novidades:
        </p>
        <a 
          href={projeto.formLink} 
          target="_blank" 
          rel="noreferrer"
          className={styles.ctaButton}
        >
          Formulário do Projeto
        </a>
      </div>
    </div>
  );
}