import React from 'react'
import './LoginComponent.css'
import Logo from '../../images/logo-ureshii.png'
import { useTranslation } from 'react-i18next';

const LoginComponent =(props)=> {
    const { t, i18n } = useTranslation();

    return (
        <div className="login">
            <div className="login-body">
                <div className="image-login">
                    <img src={Logo} />
                </div>
                <div className="desc-login">
                    <h1>{t('Login.1')}</h1>
                    <h2>{t('Login.2')}</h2>
                </div>
                <form onSubmit={props.handleLogin} className='form-login'>
                    <div className="form-group-login">
                        <div className="label">{t('Login.3')}</div>
                        <input type="email" placeholder={`${t('Login.6')} ${t('Login.3')}`}name="email" onChange={props.handleChangeFormLogin}/>
                    </div>
                    <div className="form-group-login">
                        <div className="label">{t('Login.4')}</div>
                        <input type="password" placeholder={`${t('Login.6')} ${t('Login.4')}`}name="password" onChange={props.handleChangeFormLogin}/>
                    </div>
                    <button className="btn-login" type="submit">{t('Login.1')}</button>
                    <button className="btn-register">{t('Login.5')}</button>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
