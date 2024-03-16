import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <div className="mainHeader__container__main">
          <div className="mainHeader__container__main__logo">
            <NavLink to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Logo"
              className="mainHeader__container__main__logo__img"
            />
            </NavLink>
          </div>
          <div className="mainHeader__container__main__navContainer">
            <nav className="mainHeader__container__main__navContainer__nav">
              <ul className="mainHeader__container__main__navContainer__nav__list">
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/"
                    className="mainHeader__container__main__navContainer__nav__list__item__link"
                    activeClassName="active"
                  >
                    Početna
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/about"
                    className="mainHeader__container__main__navContainer__nav__list__item__link"
                    activeClassName="active"
                  >
                    O nama
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/services"
                    className="mainHeader__container__main__navContainer__nav__list__item__link"
                    activeClassName="active"
                  >
                    Usluge
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/contact"
                    className="mainHeader__container__main__navContainer__nav__list__item__link"
                    activeClassName="active"
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mainHeader__container__secondary">
          <div className="mainHeader__container__secondary__search">
            <input
              type="text"
              placeholder="Pretraži"
              className="mainHeader__container__secondary__search__input"
            />
            <button className="mainHeader__container__secondary__search__button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
