import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import { CartContext } from "./context/CartContex";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { LangContext } from "./context/LangContext";
import { ThemeContext } from "./context/ThemeContext";
import Main from './routes/main';
import { Offline, Online } from "react-detect-offline";
import history from "./utils/History";
import { ToastContainer} from "react-toastify";
import History from "./utils/History";

function App() {
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [role, setRole] = useState(null);
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("data_user"))
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("data_user")));
    localStorage.setItem("theme", theme)
    setRole(login?.data?.role)
  }, [theme]);

  const Logout = () => {
    setTimeout(() => {
      localStorage.removeItem("data_user");
      setLogin(null);
    }, 1000);
  };

  const setThemeAction = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark");
    }
  }
  return (
    <>
    <ToastContainer />
      <div>
        <Offline>Only shown offline (surprise!)</Offline>
      </div>
      <CartContext.Provider value={{ value, setValue }}>
        <AuthContext.Provider value={{ login, setLogin }}>
          <LangContext.Provider >
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <Router history={History}>
                <Main Logout={Logout} theme={theme} setThemeAction={setThemeAction} />
              </Router>
            </ThemeContext.Provider>
          </LangContext.Provider>
        </AuthContext.Provider>
      </CartContext.Provider>
    </>

  );
}

export default App;
