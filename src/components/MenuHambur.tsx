import { siteContent } from '../data/content';
import { Link } from 'react-router-dom';
import styles from './MenuHambur.module.css'
import styles_nav from './Navbar.module.css';
import questIcon from '../imgs/menu-icons/question-solid-full.svg'
import projecIcon from '../imgs/menu-icons/note-sticky-regular-full.svg'
import groupIcon from '../imgs/menu-icons/users-solid-full.svg'

const navLinks = [
  { id: 'quemsomos', label: 'Quem somos' , icon: questIcon},
  { id: 'projetos', label: 'Projetos', icon: projecIcon},
  { id: 'equipe', label: 'Equipe', icon: groupIcon},
];

type MenuHamburguerProps = {
    onClose: () => void;
};

export default function MenuHamburguer({ onClose }: MenuHamburguerProps) {
    return (
        <>
        <div className={styles.menu}>
            <Link to="/" className={styles_nav.logo} onClick={onClose}>
                {siteContent.header.titulo}
            </Link>

            <nav className={styles.nav}>
                {navLinks.map((link) => {
                    return (
                        <a
                        key={link.id}
                        href={`/#${link.id}`}
                        className={`${styles.link}`}
                        onClick={onClose}
                        >
                    <img className={styles.icon} src={link.icon} alt={link.id}/>
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
            onClick={onClose}
            >
            Inscrição de Interesses
            </a>
            <div className={styles.deco}/>
        </div>
        </>
    )
}