import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'quemsomos', label: 'Quem somos' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'equipe', label: 'Equipe' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('quemsomos');

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // Ativa quando 40% da seção estiver visível na tela
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {siteContent.header.titulo}
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a
        href={siteContent.header.formGeralLink}
        target="_blank"
        rel="noreferrer"
        className={styles.cta}
      >
        Inscrição de Interesses
      </a>
    </header>
  );
}