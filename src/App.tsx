import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} NucTI - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}