// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../Navbar/Styles/Navbar.css'
import Logo from '../../images/logo-ureshii.png'
import Profile from '../../images/male.png'
import { useTranslation } from 'react-i18next';
import { LangContext } from "../../context/LangContext";
import { ThemeContext } from '../../context/ThemeContext';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTheme } from "../../actions";

export class Navbar extends Component {
  componentDidMount(){
  }
  _setTheme(theme){
    this.props.setTheme(theme)
  }
  render() {
    console.log(this.props.theme.theme)
    return (
      <>
      <nav className={`${this.props.theme.theme == 'dark' ? 'dark' : ''} `}>
        <div className="navbar-left">
          <img src={Logo} onClick={null} />
        </div>
        <div className="navbar-right">
          <ul>
            <li onClick={null}>Kursus</li>
            <li>
              <select value={null} onChange={null}>
                <option value="id">Indonesia</option>
                <option value="en">English</option>
              </select>
            </li>
            <li>
            <button onClick={()=>this._setTheme('light')}>Light</button>
            <button onClick={()=>this._setTheme('dark')}>Dark</button>
              {/* {
                props.theme == 'dark' ? (<label className="switch">
                  <input type="checkbox" onClick={props.setThemeAction} checked />
                  <span className="slider round"></span>
                </label>)
                  : (<label className="switch">
                    <input type="checkbox" onClick={props.setThemeAction} />
                    <span className="slider round"></span>
                  </label>)
              } */}
            </li>
            <li>
              <div className="dropdown">
                <img src={Profile} />
                <div className={`dropdown-content ${this.props.theme.theme == 'dark' ? 'dark' : ''} `}>
                  <ul>
                    <li onClick={null}>User</li>
                    <li>User</li>
                    <li>User</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>

    )
  }
}

const mapStateToProps = (state) => ({
  theme : state.theme
})

const mapDispatchToProps = {
  setTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

// const Navbar = (props) => {
//   const navigate = useNavigate();
//   const { theme, setTheme } = useContext(ThemeContext);
//   const { t, i18n } = useTranslation();
//   const { login, setLogin } = useContext(AuthContext);
//   const { lang, setLang } = useContext(LangContext);

//   return (
//     <>
//       {/* <div class="bottom-nav">
//         <div class="bottom-link-nav">
//           <a href="">
//             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
//           </a>
//           <a href="">
//             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
//           </a>
//           <a href="">
//             <img src={Logo} onClick={() => navigate('/')} width={40}/>
//           </a>
//           <a href="">
//             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
//           </a>
//           <a href="">
//             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
//           </a>
//         </div>

//       </div> */}
//       <nav className={`${theme == 'dark' ? 'dark' : ''} `}>
//         <div className="navbar-left">
//           <img src={Logo} onClick={() => navigate('/')} />
//         </div>
//         <div className="navbar-right">
//           <ul>
//             <li onClick={() => navigate('/course')}>{t('Navbar.1')}</li>
//             <li>
//               <select value={lang} onChange={(e) => props.handleClick(e.target.value)}>
//                 <option value="id">Indonesia</option>
//                 <option value="en">English</option>
//               </select>
//             </li>
//             <li>
//               {
//                 props.theme == 'dark' ? (<label className="switch">
//                   <input type="checkbox" onClick={props.setThemeAction} checked />
//                   <span className="slider round"></span>
//                 </label>)
//                   : (<label className="switch">
//                     <input type="checkbox" onClick={props.setThemeAction} />
//                     <span className="slider round"></span>
//                   </label>)
//               }
//             </li>
//             <li>
//               <div className="dropdown">
//                 <img src={Profile} />
//                 <div className={`dropdown-content ${theme == 'dark' ? 'dark' : ''} `}>
//                   <ul>
//                     <li onClick={() => navigate('/user')}>{t('Profile.1')}</li>
//                     <li>{t('Profile.2')}</li>
//                     <li>{t('Profile.3')}</li>
//                   </ul>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
