import React, { useEffect, useState, useContext } from 'react'
import './UserCommponent.css'
import imgProfile from '../../images/male.png'
import MyCourse from '../MyCourse/MyCourse'
import Profile from '../Profile/Profile'
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

function UserComponent(props) {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useContext(ThemeContext);
    const [lang, setLang] = useState(localStorage.getItem("lang"));
    const [togleNav, settogleNav] = useState(false)
    const [active, setactive] = useState({ active: null });
    useEffect(() => {
        let uri_ = window.location.href;
        let _uri = [];
        _uri = uri_.split('#')
        actionSetLang()
        setactive({ active: _uri[1] });
    }, [lang, theme])

    const setThemeAction = () => {
        if (theme == "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }
    function actionSetLang() {
        i18n.changeLanguage(lang);
    }
    function handleClick(_lang) {
        localStorage.setItem("lang", _lang)
        setLang(_lang)
    }
    // 
    const toggleBtn = () => {
        settogleNav(!togleNav)
    }
    const renderSwitch = (active) => {
        switch (active) {
            case "profile":
                return (
                    <Profile data_user={props.data_user} />
                );
            case "course":
                return (
                    <MyCourse />
                );
            default:
                return (
                    <MyCourse />
                );
        }
    };
    return (
        <>
            <div className={`user-component ${theme == 'dark' ? 'dark' : ''} `}>
                <div className={`${togleNav ? 'back' : ''} left `}>
                    <div>
                        <button onClick={toggleBtn} className={`btn-toggle-user`}>
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>
                        <select value={lang} onChange={(e) => handleClick(e.target.value)}>
                            <option value="id">Indonesia</option>
                            <option value="en">English</option>
                        </select>
                        {
                            theme == 'dark' ? (<label className="switch">
                                <input type="checkbox" onClick={setThemeAction} checked />
                                <span className="slider round"></span>
                            </label>)
                                : (<label className="switch">
                                    <input type="checkbox" onClick={setThemeAction} />
                                    <span className="slider round"></span>
                                </label>)
                        }
                    </div>
                    <div className="user-description">
                        <img src={imgProfile} alt="" />
                        <div>
                            <p>Tesar Gantara Suherman</p>
                        </div>
                    </div>
                    <div className="user-menu">
                        <ul>
                            <li onClick={() => setactive({ active: "course" })} className={`${active.active == 'course' ? 'active' : ''}`}><a href="#course">{t('User.1')}</a> </li>
                            <li onClick={() => setactive({ active: "profile" })} className={`${active.active == 'profile' ? 'active' : ''}`}><a href="#profile">{t('User.2')}</a> </li>
                            <li>Logout</li>
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

export default UserComponent
