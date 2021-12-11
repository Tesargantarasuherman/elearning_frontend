import React, { useContext } from "react";
import { Container, Menu, Segment, Icon, Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import '../Navbar/Styles/Navbar.css'
import Logo from '../../images/logo-ureshii.png'
import { useTranslation } from 'react-i18next';

const Navbar = (props) => {
  const { t, i18n } = useTranslation();
  const { login, setLogin } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="" className='img-navbar' />
      </Link>
      <ul>
        <li>
          {!login ?
            <Link className="link c-white" to="/login">
              Login
            </Link> :
            <div className="dropdown">
              <span>{login.data.nama}</span>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link className="link" to="/profile">{t('Profile.1')}</Link>
                  </li>
                  <li>
                    <button onClick={props.Logout}>{t('Profile.2')}</button>
                  </li>
                </ul>
              </div>
            </div>
          }
        </li>
        <li>
          <select name="" id="" onChange={(e) => props.handleClick(e.target.value)}>
            <option value="id" >🇮🇩 Indonesia</option>
            <option value="en"> english</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
