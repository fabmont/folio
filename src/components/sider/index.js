import React from "react";
import { Link } from "gatsby";
import { GitHub, Linkedin, Instagram } from "react-feather";
import { Container, NavMenu, IconsHolder } from "./styles";
import { github, linkedin, instagram } from "../../constants/socialNetworks";

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
