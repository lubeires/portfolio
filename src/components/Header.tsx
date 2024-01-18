import { useRef } from "react";
import { FaTimes, FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const Header = () => {
  const menuRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("show");
      console.log(menuRef.current);
    }
  };

  return (
    <header>
      <a href="#home">
        <strong>luana palhares</strong>
      </a>
      <nav ref={menuRef}>
        <a onClick={toggleMenu} href="#home">
          início
        </a>
        <a onClick={toggleMenu} href="#about">
          sobre
        </a>
        <a onClick={toggleMenu} href="#skills">
          habilidades
        </a>
        <a onClick={toggleMenu} href="#projects">
          projetos
        </a>
        <div id="socials">
          <a href="https://github.com/lubeires" rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/luanarpalhares"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto: luanaribeiropalhares@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <GrMail />
          </a>
        </div>
        <button type="button" id="close-button" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>
      <button type="button" id="menu-button" onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
};
