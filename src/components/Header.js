import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { headerLinks, logo } from "../content/HeaderContent";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleMenu = () => {
    showHamburgerMenu();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearchBar = () => {
    showSearchBar();
    setIsSearchBarOpen(!isSearchBarOpen);
  }

  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <div className="mainHeader__container__main">
          <div className="mainHeader__container__main__logo">
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="mainHeader__container__main__logo__img"
              />
            </NavLink>
          </div>
          <div className="mainHeader__container__main__navContainer">
            <nav className="mainHeader__container__main__navContainer__nav">
              <ul className="mainHeader__container__main__navContainer__nav__list">
                {headerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mainHeader__container__main__navContainer__nav__list__item"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mainHeader__container__main__navContainer__nav__list__item__link active"
                          : "mainHeader__container__main__navContainer__nav__list__item__link"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
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
          <div className="mainHeader__container__secondary__responsive">
            <button className="mainHeader__container__secondary__responsive__button" onClick={toggleSearchBar}>
              <FontAwesomeIcon icon={isSearchBarOpen ? faTimes : faSearch} />
            </button>
          </div>
        </div>
      </div>
      <div className="mainHeader__mobile">
        <div className="mainHeader__mobile__main">
          <div className="mainHeader__mobile__main__hamburger">
            <button
              className="mainHeader__mobile__main__hamburger__link"
              onClick={toggleMenu}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <div className="mainHeader__mobile__main__logo">
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="mainHeader__mobile__main__logo__img"
              />
            </NavLink>
          </div>
          <div className="mainHeader__mobile__main__container">
            <div className="mainHeader__mobile__main__container__logo">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="mainHeader__mobile__main__container__logo__img"
                />
              </NavLink>
            </div>
            <div className="mainHeader__mobile__main__container__search">
              <input
                type="text"
                placeholder="Pretraži"
                className="mainHeader__mobile__main__container__search__input"
              />
              <button className="mainHeader__mobile__main__container__search__button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <nav className="mainHeader__mobile__main__container__nav">
              <ul className="mainHeader__mobile__main__container__nav__list">
                {headerLinks.map((link, index) => (
                  <li
                    key={index}
                    className="mainHeader__mobile__main__container__nav__list__item"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "mainHeader__mobile__main__container__nav__list__item__link active"
                          : "mainHeader__mobile__main__container__nav__list__item__link"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function showHamburgerMenu() {
  const main = document.querySelector(".mainHeader__mobile__main");

  const hamburgerDiv = document.querySelector(
    ".mainHeader__mobile__main__hamburger"
  );

  const navContainer = document.querySelector(
    ".mainHeader__mobile__main__container"
  );

  const mainLogo = document.querySelector(".mainHeader__mobile__main__logo");

  // If navContainer is already displayed then remove all inline styles
  if (navContainer.style.display === "grid") {
    navContainer.style = "";
    mainLogo.style = "";
    navContainer.style = "";
    hamburgerDiv.style = "";
    main.style = "";
    return;
  }

  // Display navContainer
  navContainer.style.display = "grid";
  // Hide mainLogo
  mainLogo.style.display = "none";
  // navContainer takes positon first column first row
  navContainer.style.gridArea = "1 / 1 / 2 / 2";
  // hamburgerDiv takes position second column first row
  hamburgerDiv.style.gridArea = "1 / 2 / 2 / 3";
  // Change template columns
  main.style.gridTemplateColumns = "10fr 1fr";
}

function showSearchBar() {
  const searchButton = document.querySelector(".mainHeader__container__secondary__responsive__button");
  const navBar = document.querySelector(".mainHeader__container__main__navContainer");
  const searchBar = document.querySelector(".mainHeader__container__secondary__search");

  if (searchBar.style.display === "flex") {
    searchBar.style = "";
    navBar.style = "";

    return;
  }

  searchBar.style.display = "flex";
  navBar.style.display = "none";

}

export default Header;
