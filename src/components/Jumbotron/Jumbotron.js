import React, { useContext } from "react";
import '../Jumbotron/Styles/Jumbotron.css'
import imgJumbotron from '../../images/BG3.png'
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

function Jumbotron() {
    let history = useHistory();

    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <section className={`jumbotron ${theme == 'dark' ? 'dark' : ''} `}>
            <div className='jumbotron-left'>
                <h1>
                    <strong>{t('Jumbotron.1')}</strong>
                </h1>
                <h2>
                    {t('Jumbotron.2')}
                </h2>
                <div>
                    <button onClick={() => history.push("/register")}>Register</button>
                    <button onClick={() => history.push("/login")}>Login</button>
                </div>
            </div>
            <div className="jumbotron-right">
                <img src={imgJumbotron} />
            </div>
        </section>
    )
}

export default Jumbotron
