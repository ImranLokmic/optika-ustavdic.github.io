import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { footerLinks, backToTop, copyright } from "../content/FooterContent";

function Footer() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mainFooter">
      <div className="mainFooter__container">
        <div className="mainFooter__container__main">
          <div className="mainFooter__container__main__copyright">
            <p className="mainFooter__container__main__copyright__text">
              {new Date().getFullYear()} &copy; {copyright}
            </p>
          </div>
          <div className="mainFooter__container__main__navContainer">
            <nav className="mainFooter__container__main__navContainer__nav">
              <ul className="mainFooter__container__main__navContainer__nav__list">
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mainFooter__container__main__navContainer__nav__list__item"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mainFooter__container__main__navContainer__nav__list__item__link active"
                          : "mainFooter__container__main__navContainer__nav__list__item__link"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="mainFooter__container__main__navContainer__nav__list__item">
                  <button
                    onClick={ScrollToTop}
                    className="mainFooter__container__main__navContainer__nav__list__item__button"
                  >
                    {backToTop}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mainFooter__container__main__mobile">
            <div className="mainFooter__container__main__mobile__backToTop">
              <button
                onClick={ScrollToTop}
                className="mainFooter__container__main__mobile__backToTop__button"
              >
                {backToTop}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
