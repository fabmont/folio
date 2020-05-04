import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GitHub, Linkedin, Instagram, Sun, Moon } from 'react-feather';
import { Container, NavMenu, IconsHolder, ThemeContainer } from './styles';
import { github, linkedin, instagram } from '../../constants/socialNetworks';
import { ThemeContext } from '../layout';

export default function Sider() {
  const { darkModeActiveted, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Container>
      <ThemeContainer>
        <button type="button" className="toggle-btn" onClick={toggleDarkMode}>
          {darkModeActiveted ? <Sun size={25} /> : <Moon size={25} />}
        </button>
      </ThemeContainer>
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
                <GitHub size={25} id="nav-icon" />
              </a>
              <a href={linkedin} className="link-icon">
                <Linkedin size={25} id="nav-icon" />
              </a>
              <a href={instagram} className="link-icon">
                <Instagram size={25} id="nav-icon" />
              </a>
            </IconsHolder>
          </li>
        </ol>
      </NavMenu>
    </Container>
  );
}
