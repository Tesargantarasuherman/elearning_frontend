import React, { useEffect, useState, useContext } from 'react'
import './UserCommponent.css'
import imgProfile from '../../images/male.png'
import MyCourse from '../MyCourse/MyCourse'
import Profile from '../Profile/Profile'
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
            <MyCourse courseActive={props.courseActive}/>
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


