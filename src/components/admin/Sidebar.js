import React, { useEffect, useState, useContext } from 'react'
import './Sidebar.css'
import { connect } from 'react-redux'
import {setLanguage, setTheme, signOut, togleSidebar, validationUser } from "../../actions";
import imgProfile from '../../images/male.png'
import { useTranslation } from 'react-i18next';
import Profile from '../Profile/Profile';
import { useNavigate } from "react-router-dom";
export const Sidebar = (props) => {
    const navigate = useNavigate();

    const [togleNav, settogleNav] = useState(false)
    const [active, setactive] = useState({ active: null });
    const { t, i18n } = useTranslation();
    useEffect(() => {
        let uri_ = window.location.href;
        let _uri = [];
        _uri = uri_.split('#')
        setactive({ active: _uri[1] });
        actionSetLang(props.language);
        props.validationUser();
        console.log('sidebar',props.sidebar)
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
    const toggleBtn = () => {
        props.togleSidebar(!props.sidebar)
    }
    const signOut=()=>{
        props.signOut()
        navigate('/')
    }
    const renderOptionTheme=()=>{
        if(props.theme == 'dark'){
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
 
    return (
        <div className={`sidebar ${props.theme == 'dark' ? 'dark' : ''} ${props.sidebar ? 'back' : ''}`}>
            <div className={`${props.sidebar ? 'back' : ''} left `}>
                <div>
                    <button onClick={toggleBtn} className={`btn-toggle-user`}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                    <select value={props.language} onChange={(e) => _setLanguage(e.target.value)}>
                        <option value="id">Indonesia</option>
                        <option value="en">English</option>
                    </select>
                    {renderOptionTheme()}
                </div>
                <div className="sidebar-description">
                    <img src={imgProfile} alt="" />
                    <div>
                        <p>{props?.data_user?.nama}</p>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li onClick={() => setactive({ active: "course" })} className={`${active.active == 'course' ? 'active' : ''}`}><a href="#course">{t('User.2')}</a> </li>
                        <li onClick={() => setactive({ active: "profile" })} className={`${active.active == 'profile' ? 'active' : ''}`}><a href="#profile">{t('User.1')}</a> </li>
                        <li onClick={signOut}>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    data_user : state.auth?.data_user,
    language:state.language.language,
    isSignedIn: state.auth.isSignedIn,
    sidebar:state.sidebar.sidebar
})

const mapDispatchToProps = {
    setTheme,
    setLanguage,
    validationUser,
    signOut,
    togleSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
