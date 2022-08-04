import React from 'react'
import './RegisterComponent.css'
import Logo from '../../images/logo-ureshii.png'
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Register } from '../../actions';
import 'react-toastify/dist/ReactToastify.css';

export const RegiserComponent = (props) => {
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
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{title}</label>
                <input {...input} placeholder={label} autoComplete="off" type={type} />
                {renderError(meta)}
            </div>
        )
    }

    const onSubmit = (formValues) => {
        props.Register(formValues);
    }
    return (
        <div className={`register ${props.theme.theme == 'dark' ? 'dark' : ''} `}>
            <div className="register-body">
                <div className="image-register">
                    <img src={Logo} />
                </div>
                <div className="desc-register">
                    <h1>{t('Register.1')}</h1>
                    <h2>{t('Register.2')}</h2>
                </div>
                <form onSubmit={props.handleSubmit(onSubmit)} className='form-register ui form error'>
                    <Field title="Nama" name="nama" type="text" component={renderInput} label="Masukkan Nama" />
                    <Field title="Email" name="email" type="email" component={renderInput} label="Masukkan Email" />
                    <Field title="Password" name="password" type="password" component={renderInput} label="Masukkan Password" />
                    <Field title="Konfirmasi Password" type="password" name="password_confirmation" component={renderInput} label="Masukkan Konfirmasi Password" />
                    <button type="submit" className="btn-register">Register</button>
                </form>
            </div>
        </div>
    )
}
// Validate Form Redux
const validate = (formValues) => {
    const errors = {};

    if (!formValues.nama) {
        errors.nama = "You must enter a nama"
    }
    if (!formValues.email) {
        errors.email = "You must enter a email"
    }
    if (!formValues.password) {
        errors.password = "You must enter a password"
    }
    if (!formValues.password_confirmation) {
        errors.password_confirmation = "You must enter a password_confirmation"
    }
    return errors;
}
const formWrapped = reduxForm({
    form: 'registerForm',
    validate: validate
})(RegiserComponent);
const mapStateToProps = (state) => ({
    theme: state.theme
})

const mapDispatchToProps = {
    Register,
}
export default connect(mapStateToProps, mapDispatchToProps)(formWrapped)// const RegiserComponent =(props)=> {

//     const { t, i18n } = useTranslation();
//     const { theme, setTheme } = useContext(ThemeContext);

//     return (
//         <div className={`register ${theme == 'dark' ? 'dark' : ''} `}>
//         <div className="register-body">
//                 <div className="image-register">
//                     <img src={Logo} />
//                 </div>
//                 <div className="desc-register">
//                     <h1>{t('Register.1')}</h1>
//                     <h2>{t('Register.2')}</h2>
//                 </div>
//                 <form onSubmit={props.handleRegister} className='form-register'>
//                     <div className="form-group-register">
//                         <div className="label">{t('Register.7')}</div>
//                         <input type="text" placeholder={`${t('Register.6')} ${t('Register.7')}`}name="nama" onChange={props.handleChangeFormRegister}/>
//                     </div>
//                     <div className="form-group-register">
//                         <div className="label">{t('Register.3')}</div>
//                         <input type="email" placeholder={`${t('Register.6')} ${t('Register.3')}`}name="email" onChange={props.handleChangeFormRegister}/>
//                     </div>
//                     <div className="form-group-register">
//                         <div className="label">{t('Register.4')}</div>
//                         <input type="password" placeholder={`${t('Register.6')} ${t('Register.4')}`}name="password" onChange={props.handleChangeFormRegister}/>
//                     </div>
//                     <div className="form-group-register">
//                         <div className="label">{t('Register.8')}</div>
//                         <input type="password" placeholder={`${t('Register.6')} ${t('Register.8')}`}name="password_confirmation" onChange={props.handleChangeFormRegister}/>
//                     </div>
//                     <button className="btn-register">{t('Register.1')}</button>
//                     <button className="btn-register" type="submit">{t('Register.5')}</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default RegiserComponent
