import { useParams, Link } from 'react-router-dom';
import { siteContent } from '../data/content';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const projeto = siteContent.projetos.find((p) => p.id === id);

  if (!projeto) {
    return (
      <div style={{ padding: '40px 0', textAlign: 'center' }}>
        <h2>Projeto não encontrado!</h2>
        <Link to="/" style={{ color: '#0056b3' }}>Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 0' }}>
      <Link to="/" style={{ color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Voltar para a Home
      </Link>

      <h1 style={{ color: '#0056b3', marginTop: '20px' }}>{projeto.titulo}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
        {projeto.descricaoCompleta}
      </p>

      <h3 style={{ marginTop: '30px' }}>Fotos de Eventos e Atividades</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', marginTop: '10px' }}>
        {projeto.fotos.map((foto, index) => (
          <img 
            key={index} 
            src={foto} 
            alt={`Foto ${index + 1}`} 
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} 
          />
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#f0f7ff', borderRadius: '8px', textAlign: 'center' }}>
        <h3>Tenho interesse neste projeto</h3>
        <p style={{ marginBottom: '15px' }}>Preencha o formulário específico para participar do processo seletivo ou receber novidades:</p>
        <a 
          href={projeto.formLink} 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#28a745',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}
        >
          Formulário de Inscrição do Projeto
        </a>
      </div>
    </div>
  );
}