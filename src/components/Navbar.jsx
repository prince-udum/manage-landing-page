import React, { useState, useRef } from "react";
import Logo from "../assets/logo.svg";
import Hambuger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { navLinks } from "../data";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hambugerRef = useRef();

  console.log(hambugerRef.current);

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
    hambugerRef.current.classList.add("hide-hamburger");
    document.body.classList.add("body-overflow");
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    hambugerRef.current.classList.remove("hide-hamburger");
    document.body.classList.remove("body-overflow");
  }

  return (
    <header className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="Manage" className="logo" />

          {/* hamburger icon */}
          <img
            src={Hambuger}
            alt="Open Menu"
            className="open-menu"
            ref={hambugerRef}
            onClick={() => openMobileMenu()}
          />
        </div>

        {/* nav-links */}
        <nav
          className={isMobileMenuOpen ? "nav-links show-navlinks" : "nav-links"}
        >
          {/* close icon */}
          <img
            src={Close}
            alt="Close Menu"
            className="close-menu"
            onClick={() => closeMobileMenu()}
          />
          <ul>
            {navLinks.map((link) => {
              const { id, text, href } = link;
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA buttons */}
        <button className="btn nav-btn">Get started</button>
      </div>
    </header>
  );
};

export default Navbar;
