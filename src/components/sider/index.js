import React from 'react';
import { Link } from 'gatsby';
import { GitHub, Linkedin, Instagram } from 'react-feather';
import { Container, NavMenu, IconsHolder } from './styles';

export default function Sider() {
  return (
    <Container>
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
              Contacts
            </Link>
          </li>
          <li>
            <IconsHolder>
              <a href="https://github.com/fabmont" className="link-icon">
                <GitHub />
              </a>
              <a href="https://github.com/fabmont" className="link-icon">
                <Linkedin />
              </a>
              <a href="https://github.com/fabmont" className="link-icon">
                <Instagram />
              </a>
            </IconsHolder>
          </li>
        </ol>
      </NavMenu>
    </Container>
  );
}
