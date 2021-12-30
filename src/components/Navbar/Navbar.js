import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import '../Navbar/Styles/Navbar.css'
import Logo from '../../images/logo-ureshii.png'
import Profile from '../../images/male.png'
import { useTranslation } from 'react-i18next';
import { LangContext } from "../../context/LangContext";
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = (props) => {
  let history = useHistory();
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const { login, setLogin } = useContext(AuthContext);
  const { lang, setLang } = useContext(LangContext);

  return (
    <nav className={`${theme == 'dark' ? 'dark' : ''} `}>
      <div className="navbar-left">
        <img src={Logo} onClick={() => history.push('/')} />
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={() => history.push('/course')}>{t('Navbar.1')}</li>
          <li>
            <select value={lang} onChange={(e) => props.handleClick(e.target.value)}>
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </li>
          <li>
            {
              props.theme == 'dark' ? (<label className="switch">
                <input type="checkbox" onClick={props.setThemeAction} checked />
                <span className="slider round"></span>
              </label>)
                : (<label className="switch">
                  <input type="checkbox" onClick={props.setThemeAction} />
                  <span className="slider round"></span>
                </label>)
            }
          </li>
          <li>
            <div className="dropdown">
              <img src={Profile} />
              <div className="dropdown-content">
                <ul>
                  <li onClick={() => history.push('/user')}>{t('Profile.1')}</li>
                  <li>{t('Profile.2')}</li>
                  <li>{t('Profile.3')}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
