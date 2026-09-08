import { Outlet, Link } from 'react-router-dom';
import { siteContent } from './data/content';
import './App.css';

export default function App() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0056b3', textDecoration: 'none' }}>
          {siteContent.header.titulo}
        </Link>
        <a 
          href={siteContent.header.formGeralLink} 
          target="_blank" 
          rel="noreferrer"
          style={{ padding: '8px 16px', backgroundColor: '#0056b3', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Inscrição de Interesses
        </a>
      </header>

      <main style={{ minHeight: '70vh' }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'center', color: '#666' }}>
        <p>© {new Date().getFullYear()} NucTI - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}