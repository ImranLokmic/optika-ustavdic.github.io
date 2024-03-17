import React, {useState} from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    showHamburgerMenu();
    setIsMenuOpen(!isMenuOpen);
  };

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
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__container__main__navContainer__nav__list__item__link active"
                        : "mainHeader__container__main__navContainer__nav__list__item__link"
                    }
                  >
                    Početna
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/radnje"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__container__main__navContainer__nav__list__item__link active"
                        : "mainHeader__container__main__navContainer__nav__list__item__link"
                    }
                  >
                    Radnje
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/ponuda"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__container__main__navContainer__nav__list__item__link active"
                        : "mainHeader__container__main__navContainer__nav__list__item__link"
                    }
                  >
                    Ponuda
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/asistent"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__container__main__navContainer__nav__list__item__link active"
                        : "mainHeader__container__main__navContainer__nav__list__item__link"
                    }
                  >
                    Asistent
                  </NavLink>
                </li>
                <li className="mainHeader__container__main__navContainer__nav__list__item">
                  <NavLink
                    to="/onama"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__container__main__navContainer__nav__list__item__link active"
                        : "mainHeader__container__main__navContainer__nav__list__item__link"
                    }
                  >
                    O nama
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
      <div className="mainHeader__mobile">
        <div className="mainHeader__mobile__main">
          <div className="mainHeader__mobile__main__hamburger">
            <a
              href="#"
              className="mainHeader__mobile__main__hamburger__link"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </a>
          </div>
          <div className="mainHeader__mobile__main__logo">
            <NavLink to="/">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="Logo"
                className="mainHeader__mobile__main__logo__img"
              />
            </NavLink>
          </div>
          <div className="mainHeader__mobile__main__container">
            <div className="mainHeader__mobile__main__container__logo">
              <NavLink to="/">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
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
                <li className="mainHeader__mobile__main__container__nav__list__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__mobile__main__container__nav__list__item__link active"
                        : "mainHeader__mobile__main__container__nav__list__item__link"
                    }
                  >
                    Početna
                  </NavLink>
                </li>
                <li className="mainHeader__mobile__main__container__nav__list__item">
                  <NavLink
                    to="/radnje"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__mobile__main__container__nav__list__item__link active"
                        : "mainHeader__mobile__main__container__nav__list__item__link"
                    }
                  >
                    Radnje
                  </NavLink>
                </li>
                <li className="mainHeader__mobile__main__container__nav__list__item">
                  <NavLink
                    to="/ponuda"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__mobile__main__container__nav__list__item__link active"
                        : "mainHeader__mobile__main__container__nav__list__item__link"
                    }
                  >
                    Ponuda
                  </NavLink>
                </li>
                <li className="mainHeader__mobile__main__container__nav__list__item">
                  <NavLink
                    to="/asistent"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__mobile__main__container__nav__list__item__link active"
                        : "mainHeader__mobile__main__container__nav__list__item__link"
                    }
                  >
                    Asistent
                  </NavLink>
                </li>
                <li className="mainHeader__mobile__main__container__nav__list__item">
                  <NavLink
                    to="/onama"
                    className={({ isActive }) =>
                      isActive
                        ? "mainHeader__mobile__main__container__nav__list__item__link active"
                        : "mainHeader__mobile__main__container__nav__list__item__link"
                    }
                  >
                    O nama
                  </NavLink>
                </li>
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

  const hamburgerButton = document.querySelector(
    ".mainHeader__mobile__main__hamburger__link"
  );

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
export default Header;
