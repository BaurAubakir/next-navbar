import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Bars from './icons/bars-solid.svg';
import Xmark from './icons/xmark-solid.svg';
import styles from './styles/Navbar.module.scss';

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      setShow(false);
    }
  };

  const handleOtsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShow(false);
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

  const showMenu = show && (
    <MobileMenu className={styles.mobileMenu} onClick={() => setShow(false)}>
      <CustomLink href='/projects' onClick={() => setShow(!show)}>
        Projects
      </CustomLink>
      <CustomLink href='/about' onClick={() => setShow(!show)}>
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
      <button className={styles.menuIcon} onClick={() => setShow(!show)}>
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

const CustomLink = ({ href, children, props }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a className={router.asPath === href ? 'active' : ''} {...props}>
          {children}
        </a>
      </Link>
    </li>
  );
};
