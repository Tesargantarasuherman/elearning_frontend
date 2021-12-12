import React from 'react'
import '../Jumbotron/Styles/Jumbotron.css'
import imgJumbotron from '../../images/BG3.png'
import { useTranslation } from 'react-i18next';

function Jumbotron() {
    const { t, i18n } = useTranslation();
    return (
        <section className='jumbotron'>
            <div className='jumbotron-left'>
                <h1>
                    <strong>{t('Jumbotron.1')}</strong>
                </h1>
                <h2>
                    {t('Jumbotron.2')}
                </h2>
                <div>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
            <div className="jumbotron-right">
                <img src={imgJumbotron} />
            </div>
        </section>
    )
}

export default Jumbotron