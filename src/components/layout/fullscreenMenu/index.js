import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GitHub, Linkedin, Instagram, X, Sun, Moon } from 'react-feather';
import { MenuDrawer, NavMenu, IconsHolder, ThemeToggle } from './styles';
import { github, linkedin, instagram } from '../../../constants/socialNetworks';
import { ThemeContext } from '..';

export default function FullscreenMenu({ closeModal, drawerVisible }) {
  const { darkModeActiveted, toggleDarkMode } = useContext(ThemeContext);

  return (
    <MenuDrawer drawerVisible={drawerVisible}>
      <ThemeToggle onClick={toggleDarkMode}>
        {darkModeActiveted ? <Sun size={25} /> : <Moon size={25} />}
      </ThemeToggle>
      <X
        size={30}
        color="white"
        style={{ cursor: 'pointer', position: 'absolute', top: 24, right: 24 }}
        onClick={closeModal}
      />
      <NavMenu>
        <ol>
          <li>
            <Link activeClassName="link-active" className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="link-active" className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClassName="link-active" className="link" to="/contacts">
              Contact
            </Link>
          </li>
          <li>
            <IconsHolder>
              <a href={github} className="link-icon">
                <GitHub size={35} id="nav-icon" />
              </a>
              <a href={linkedin} className="link-icon">
                <Linkedin size={35} id="nav-icon" />
              </a>
              <a href={instagram} className="link-icon">
                <Instagram size={35} id="nav-icon" />
              </a>
            </IconsHolder>
          </li>
        </ol>
      </NavMenu>
    </MenuDrawer>
  );
}
