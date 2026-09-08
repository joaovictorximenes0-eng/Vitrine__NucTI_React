import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';

export default function Home() {
  return (
    <div style={{ padding: '20px 0' }}>
      {/* Quem Somos */}
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ color: '#0056b3' }}>{siteContent.quemSomos.titulo}</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          {siteContent.quemSomos.descricao}
        </p>
        <a 
          href={siteContent.header.formGeralLink} 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#0056b3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold'
          }}
        >
          Formulário Geral de Interesses
        </a>
      </section>

      {/* Seção Projetos */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Projetos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '15px' }}>
          {siteContent.projetos.map((proj) => (
            <div 
              key={proj.id} 
              style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#fff' }}
            >
              <h3>{proj.titulo}</h3>
              <p>{proj.resumo}</p>
              <Link 
                to={`/projetos/${proj.id}`} 
                style={{ color: '#0056b3', fontWeight: 'bold', textDecoration: 'none' }}
              >
                Ver detalhes e fotos →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Equipe */}
      <section>
        <h2>Equipe</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '15px' }}>
          {siteContent.equipe.map((membro, index) => (
            <div key={index} style={{ textAlign: 'center', width: '120px' }}>
              <img 
                src={membro.foto} 
                alt={membro.nome} 
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <h4 style={{ margin: '10px 0 5px' }}>{membro.nome}</h4>
              <span style={{ fontSize: '0.85rem', color: '#666' }}>{membro.cargo}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}