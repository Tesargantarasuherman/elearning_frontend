import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import '../Navbar/Styles/Navbar.css'
import Logo from '../../images/logo-ureshii.png'
import Profile from '../../images/male.png'
import { useTranslation } from 'react-i18next';

const Navbar = (props) => {
  const { t, i18n } = useTranslation();
  const { login, setLogin } = useContext(AuthContext);

  return (
    <nav>
      <div className="navbar-left">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link className="link">{t('Navbar.1')}</Link></li>
          <li>
            <select onChange={(e) => props.handleClick(e.target.value)}>
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </li>
          <li>
            <div className="dropdown">
              <img src={Profile}/>
              <div className="dropdown-content">
                <ul>
                  <li><Link className="link">{t('Profile.1')}</Link></li>
                  <li><Link className="link">{t('Profile.2')}</Link></li>
                  <li><Link className="link">{t('Profile.3')}</Link></li>
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
