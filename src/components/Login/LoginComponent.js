import React from 'react'
import './LoginComponent.css'
import Logo from '../../images/logo-ureshii.png'
import { useTranslation } from 'react-i18next';
import Alert from '../_components/Alert';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

export const LoginComponent = (props) => {
    const { t, i18n } = useTranslation();

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    const renderInput = ({ input, title, label, meta, type }) => {
        const className = `form-group-login field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{title}</label>
                <input {...input} placeholder={label} autoComplete="off" type={type} />
                {renderError(meta)}
            </div>
        )
    }
    const onSubmit = (formValues) => {
        
    }
  return (
        <div className={`login ${props.theme == 'dark' ? 'dark' : ''} `}>
            <div className="login-body">
                <div className="image-login">
                    <img src={Logo} />
                </div>
                <div className="desc-login">
                    <h1>{t('Login.1')}</h1>
                    <h2>{t('Login.2')}</h2>
                </div>
                <form onSubmit={props.handleSubmit(onSubmit)} className='form-login ui form error'>
                    <Field title={t('Login.3')} name="email" type="email" component={renderInput} label={`${t('Login.6')} ${t('Login.3')}`} />
                    <Field title={t('Login.4')} name="password" type="password" component={renderInput} label={`${t('Login.6')} ${t('Login.4')}`} />
                    <button className="btn-login" type="submit">{t('Login.1')}</button>
                    <button className="btn-register">{t('Login.5')}</button>
                </form>
            </div>
        </div>  
    )
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.email) {
        errors.email = "You must enter a email"
    }
    if (!formValues.password) {
        errors.password = "You must enter a password"
    }
    return errors;
}
const formWrapped = reduxForm({
    form: 'loginForm',
    validate: validate
})(LoginComponent);
const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(formWrapped)
{/* <div className="login-body">
                <div className="image-login">
                    <img src={Logo} />
                </div>
                <div className="desc-login">
                    <h1>{t('Login.1')}</h1>
                    <h2>{t('Login.2')}</h2>
                </div>
                <form onSubmit={null} className='form-login ui form error'>
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
            </div> */}
