import React from 'react'
import './RegisterComponent.css'
import Logo from '../../images/logo-ureshii.png'
import { useTranslation } from 'react-i18next';

const RegiserComponent =(props)=> {
    const { t, i18n } = useTranslation();

    return (
        <div className="register">
            <div className="register-body">
                <div className="image-register">
                    <img src={Logo} />
                </div>
                <div className="desc-register">
                    <h1>{t('Register.1')}</h1>
                    <h2>{t('Register.2')}</h2>
                </div>
                <form onSubmit={props.handleRegister} className='form-register'>
                    <div className="form-group-register">
                        <div className="label">{t('Register.7')}</div>
                        <input type="email" placeholder={`${t('Register.6')} ${t('Register.7')}`}name="nama" onChange={props.handleChangeFormRegister}/>
                    </div>
                    <div className="form-group-register">
                        <div className="label">{t('Register.3')}</div>
                        <input type="email" placeholder={`${t('Register.6')} ${t('Register.3')}`}name="email" onChange={props.handleChangeFormRegister}/>
                    </div>
                    <div className="form-group-register">
                        <div className="label">{t('Register.4')}</div>
                        <input type="password" placeholder={`${t('Register.6')} ${t('Register.4')}`}name="password" onChange={props.handleChangeFormRegister}/>
                    </div>
                    <div className="form-group-register">
                        <div className="label">{t('Register.8')}</div>
                        <input type="password" placeholder={`${t('Register.6')} ${t('Register.8')}`}name="password_confirmation" onChange={props.handleChangeFormRegister}/>
                    </div>
                    <button className="btn-register">{t('Register.1')}</button>
                    <button className="btn-register" type="submit">{t('Register.5')}</button>
                </form>
            </div>
        </div>
    )
}

export default RegiserComponent
