import React from 'react'
import './RegisterComponent.css'
import Logo from '../../images/logo-ureshii.png'
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Register } from '../../actions';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class RegiserComponent extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, title, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{title}</label>
                <input {...input} placeholder={label} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    renderFailed =(param)=>{
        if(param.isError){
            return(
                toast.error(param.errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })            
            )
        }
    }
    onSubmit = (formValues) => {
        this.props.Register(formValues);
        this.renderFailed(this.props.register);
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div className={`register`}>
                <ToastContainer />
                <div className="register-body">
                    <div className="image-register">
                        <img src={Logo} />
                    </div>
                    <div className="desc-register">
                        <h1>Register</h1>
                        <h2>Register</h2>
                    </div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='form-register ui form error'>
                        <Field title="Nama" name="nama" component={this.renderInput} label="Masukkan Nama" />
                        <Field title="Email" name="email" component={this.renderInput} label="Masukkan Email" />
                        <Field title="Password" name="password" component={this.renderInput} label="Masukkan Password" />
                        <Field title="Konfirmasi Password" name="password_confirmation" component={this.renderInput} label="Masukkan Konfirmasi Password" />
                        <button type="submit" className="btn-register">Register</button>
                    </form>
                </div>
            </div>
        )
    }
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
    register: state.auth
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
