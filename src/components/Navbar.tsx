import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import styles from './Navbar.module.css';
import MenuHamburguer from './MenuHambur';
import menuIcon from '../imgs/menu-icons/bars-solid-full.svg'
import nuctiLogo from '../imgs/nucti-logo.jpeg';


const navLinks = [
  { id: 'quemsomos', label: 'Quem somos' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'equipe', label: 'Equipe' },
];
type SubscribeBtnProps = {
  mode: 'nav' | 'menu'
}
export function SubscribeBtn({mode} : SubscribeBtnProps) {
  return (
    <a
      href={siteContent.header.formGeralLink}
      target="_blank"
      rel="noreferrer"
      className={mode == 'nav' ? styles.cta :  styles.cta_menu }
      >
      Inscrição de Interesses
    </a>
  )
}

type TitileNucTiProps = {
  onClick?: () => void;
}
export function TitleNucTi({onClick} : TitileNucTiProps) {
  return (
    <Link to="/" className={styles.logo} onClick={onClick}>
      {siteContent.header.titulo}
    </Link>
  )
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('quemsomos');
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

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

  function menu_click(){
    setMenuOpen(!menuOpen)
  }

  return (
    <>
    <header className={styles.header}>
      <div className={styles.header_nav}>
        <TitleNucTi/>

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
  return (
    
    <header className={styles.header}>
       <Link to="/" className={styles.logo}>
  {siteContent.header.titulo}
  <img src={nuctiLogo} alt="Logo NucTI" className={styles.logoImage} />
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

        <SubscribeBtn mode='nav'/>

        <button className={`${styles.menu_btn} ${menuOpen ? styles.menu_btn_act : ''}`} onClick={menu_click}>
          <img className={styles.menu_icon} src={menuIcon} alt="Menu"/>
        </button>
      </div>
      {menuOpen &&(
        <MenuHamburguer onClose={() => setMenuOpen(false)} />
      )}
    </header>
    {menuOpen && (
      <div className={styles.overlay_menu} onClick={() => setMenuOpen(false)}/>
    )}
    </>
  );
}