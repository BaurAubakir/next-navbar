import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Bars from './icons/bars-solid.svg';
import Xmark from './icons/xmark-solid.svg';
import styles from './styles/Navbar.module.scss';

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const ref = useRef(null);

  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      setMenuState(false);
    }
  };

  const handleOtsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setMenuState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false);
    document.addEventListener('click', handleOtsideClick, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
      document.removeEventListener('click', handleOtsideClick, false);
    };
  });

  const showMenu = menuState && (
    <MobileMenu
      className={styles.mobileMenu}
      onClick={() => setMenuState(false)}
    >
      <CustomLink href='/projects' onClick={() => setMenuState(false)}>
        Projects
      </CustomLink>
      <CustomLink href='/about' onClick={() => setMenuState(false)}>
        About
      </CustomLink>
    </MobileMenu>
  );
  return (
    <header className={styles.navbar} ref={ref}>
      <ul className={styles.logo}>
        <CustomLink href='/'>Logobakery</CustomLink>
      </ul>
      <Menu className={styles.menu}>
        <CustomLink href='/projects'>Projects</CustomLink>
        <CustomLink href='/about'>About</CustomLink>
        <button>Contacts</button>
      </Menu>
      <button className={styles.menuIcon} onClick={() => setMenuState(true)}>
        <Bars style={{ width: 25, height: 25, fill: '#3498db' }} />
      </button>
      {showMenu}
    </header>
  );
};

const Menu = ({ children, className }) => (
  <nav className={className}>
    <ul className={styles.navLinks}>{children}</ul>
  </nav>
);

const MobileMenu = ({ children, className, onClick }) => (
  <nav
    className={className}
    style={{
      animation: 'fadeInLeft 0.3s ease',
    }}
  >
    <Xmark className={styles.xmark} onClick={onClick} />
    <ul>{children}</ul>
  </nav>
);

const CustomLink = ({ href, children, props, onClick }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a className={router.asPath === href ? 'active' : ''} onClick={onClick}>
          {children}
        </a>
      </Link>
    </li>
  );
};
