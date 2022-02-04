import {
  BrowserRouter,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { CartContext } from "./context/CartContex";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { LangContext } from "./context/LangContext";
import { ThemeContext } from "./context/ThemeContext";
import Main from './routes/main';
import { Offline, Online } from "react-detect-offline";

function App() {
  const [value, setValue] = useState(0);
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [role, setRole] = useState(null);
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("data_user"))
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("data_user")));
    actionSetLang()
    localStorage.setItem("theme", theme)
    setRole(login?.data?.role)
  }, [lang, theme]);

  const Logout = () => {
    setTimeout(() => {
      localStorage.removeItem("data_user");
      setLogin(null);
    }, 1000);
  };
  function handleClick(_lang) {
    localStorage.setItem("lang", _lang)
    setLang(_lang)
  }
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
  return (
    <>
      <div>
        <Offline>Only shown offline (surprise!)</Offline>
      </div>
      <CartContext.Provider value={{ value, setValue }}>
        <AuthContext.Provider value={{ login, setLogin }}>
          <LangContext.Provider value={{ lang, setLang }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <BrowserRouter>
                <Main Logout={Logout} handleClick={handleClick} theme={theme} setThemeAction={setThemeAction} />
              </BrowserRouter>
            </ThemeContext.Provider>
          </LangContext.Provider>
        </AuthContext.Provider>
      </CartContext.Provider>
    </>

  );
}

export default App;
