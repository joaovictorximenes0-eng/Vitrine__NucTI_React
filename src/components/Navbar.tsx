import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/#quemsomos', label: 'Quem somos' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#equipe', label: 'Equipe' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {siteContent.header.titulo}
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={siteContent.header.formGeralLink}
        target="_blank"
        rel="noreferrer"
        className={styles.cta}
      >
        Inscrição
      </a>
    </header>
  );
}