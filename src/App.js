import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { CartContext } from "./context/CartContex";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
// import MyClass from "./pages/MyClass";
import User from "./pages/User";
// import KursusSaya from "./pages/KursusSaya";
// import DetailKursus from "./pages/DetailKursus";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { LangContext } from "./context/LangContext";
import { ThemeContext } from "./context/ThemeContext";
import Register from "./pages/Register";
import Course from "./pages/Course";
import CoursePlaying from "./pages/CoursePlaying";
import CourseDetail from "./pages/CourseDetail";
import CourseCheckout from "./pages/CourseCheckout";

function App() {
  const [value, setValue] = useState(0);
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("data_user"))
  );
  const history = useHistory();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("data_user")));
    actionSetLang()
    localStorage.setItem("theme", theme)
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
    <Router>
      <CartContext.Provider value={{ value, setValue }}>
        <AuthContext.Provider value={{ login, setLogin }}>
          <LangContext.Provider value={{ lang, setLang }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <Navbar Logout={Logout} handleClick={handleClick} theme={theme} setThemeAction={setThemeAction} />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/course">
                  <Course />
                </Route>
                <Route path="/login">{login ? <Home /> : <Login />}</Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/course/detail">
                  <CourseDetail />
                </Route>
                <Route path="/course/checkout">
                  <CourseCheckout />
                </Route>
                <Route path="/course/playing">
                  <CoursePlaying />
                </Route>
                {/* <Route path="/my-class/:id">
                {login ? <MyClass /> : <Login />}
              </Route> */}
                {/* <Route path="/kursus/:id">
                {login ? <DetailKursus /> : <Login />}
              </Route> */}
                <Route path="/user">{login ? <User /> : <Login />}</Route>
                <Route component={NotFound} />
              </Switch>
            </ThemeContext.Provider>
          </LangContext.Provider>
        </AuthContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
