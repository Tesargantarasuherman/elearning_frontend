import React, { useEffect, useState, useContext } from 'react'
import './UserCommponent.css'
import imgProfile from '../../images/male.png'
import MyCourse from '../MyCourse/MyCourse'
import Profile from '../Profile/Profile'
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import {setLanguage, setTheme, signOut, validationUser } from "../../actions";

export const UserComponent = (props) => {
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
        settogleNav(!togleNav)
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
    const renderSwitch = (active) => {
        switch (active) {
            case "profile":
                return (
                    <Profile data_user={props.data_user} />
                );
            case "course":
                return (
                    <MyCourse courseActive={props.courseActive}/>
                );
            default:
                return (
                    <MyCourse courseActive={props.courseActive}/>
                );
        }
    };
    return (
        <>
            <div className={`user-component ${props.theme == 'dark' ? 'dark' : ''} `}>
                <div className={`${togleNav ? 'back' : ''} left `}>
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
                    <div className="user-description">
                        <img src={imgProfile} alt="" />
                        <div>
                            <p>{props?.data_user?.nama}</p>
                        </div>
                    </div>
                    <div className="user-menu">
                        <ul>
                            <li onClick={() => setactive({ active: "course" })} className={`${active.active == 'course' ? 'active' : ''}`}><a href="#course">{t('User.2')}</a> </li>
                            <li onClick={() => setactive({ active: "profile" })} className={`${active.active == 'profile' ? 'active' : ''}`}><a href="#profile">{t('User.1')}</a> </li>
                            <li onClick={()=>props.signOut()}>Logout</li>
                        </ul>
                    </div>

                </div>
                <div className="right">
                    {renderSwitch(active.active)}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme,
    data_user : state.auth?.data_user,
    language:state.language.language,
    isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
    setTheme,
    setLanguage,
    validationUser,
    signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)


