import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../Navbar/Styles/Navbar.css'
import Logo from '../../images/logo-ureshii.png'
import Profile from '../../images/male.png'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import {setLanguage, setTheme, signOut, validationUser } from "../../actions";
import { useEffect } from "react";

export const Navbar = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log(props)
    actionSetLang(props.language);
  }, [])

  const actionSetLang=(_lang)=> {
    i18n.changeLanguage(_lang);
  }
  const _setTheme = (theme) => {
    props.setTheme(theme)
  }
  const _setLanguage = (language) => {
    actionSetLang(language);
    props.setLanguage(language)
  }
  const renderOptionTheme=()=>{
    if(props.theme.theme == 'dark'){
      return (
        <label className="switch">
          <input type="checkbox" onClick={() => _setTheme('light')} checked />
          <span className="slider round"></span>
        </label>
      )
    }
    else{
      return(
        <label className="switch">
          <input type="checkbox" onClick={() => _setTheme('dark')} />
          <span className="slider round"></span>
        </label>
      )
    }
  }
  const renderUser =()=>{
    if (props.isSignedIn) {
      return (
          <>
             <div className="dropdown">
                <img src={Profile} />
                <div className={`dropdown-content ${props.theme.theme == 'dark' ? 'dark' : ''} `}>
                  <ul>
                    <li onClick={() => navigate('/user')}>{t('Profile.1')}</li>
                    <li>{t('Profile.2')}</li>
                    <li onClick={()=>props.signOut()}>{t('Profile.3')}</li>
                  </ul>
                </div>
              </div>
          </>
      )
  }
  }
  return (
    <>
      <nav className={`${props.theme.theme == 'dark' ? 'dark' : ''} `}>
        <div className="navbar-left">
          <img src={Logo} onClick={() => navigate('/')} />
        </div>
        <div className="navbar-right">
          <ul>
            <li onClick={() => navigate('/course')}>{t('Navbar.1')}</li>
            <li>
              <select value={props.language} onChange={(e) => _setLanguage(e.target.value)}>
                <option value="id">Indonesia</option>
                <option value="en">English</option>
              </select>
            </li>
            <li>
              {renderOptionTheme()}
            </li>
            <li>
             {renderUser()}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};


const mapStateToProps = (state) => ({
  theme: state.theme,
  language:state.language.language,
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
  setTheme,
  setLanguage,
  validationUser,
  signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

