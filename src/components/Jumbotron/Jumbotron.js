import React, { useContext } from "react";
import '../Jumbotron/Styles/Jumbotron.css'
import imgJumbotron from '../../images/BG3.png'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { connect } from 'react-redux'
import { validationUser } from "../../actions";
import { useEffect } from "react";

export const Jumbotron = (props) => {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    useEffect(() => {
       props.validationUser()
      }, []);
  return (
    <section className={`jumbotron ${props.theme.theme == 'dark' ? 'dark' : ''} `}>
        <div className='jumbotron-left'>
            <h1>
                <strong>{t('Jumbotron.1')}</strong>
            </h1>
            <h2>
                {t('Jumbotron.2')}
            </h2>
            <div>
                <button onClick={() => navigate("/register")}>Register</button>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>
        </div>
        <div className="jumbotron-right">
            <img src={imgJumbotron} />
        </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
    theme: state.theme
})

const mapDispatchToProps = {
    validationUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron)

