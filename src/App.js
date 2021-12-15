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
import MyClass from "./pages/MyClass";
import User from "./pages/User";
import KursusSaya from "./pages/KursusSaya";
import DetailKursus from "./pages/DetailKursus";
import NotFound from "./pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { LangContext } from "./context/LangContext";
import Register from "./pages/Register";
import Course from "./pages/Course";
import CoursePlaying from "./pages/CoursePlaying";

function App() {
  const [value, setValue] = useState(0);
  const [lang, setLang] = useState(0);
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("data_user"))
  );
  const history = useHistory();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("data_user")));
    actionSetLang()
  }, [lang]);
  const Logout = () => {
    toast.success("Anda Telah Keluar");
    setTimeout(() => {
      localStorage.removeItem("data_user");
      setLogin(null);
    }, 1000);
  };
  function handleClick(_lang) {
    setLang(_lang)
  }
  function actionSetLang() {
    console.log(lang)
    i18n.changeLanguage(lang);
  }
  return (
    <Router>
      <ToastContainer />
      <CartContext.Provider value={{ value, setValue }}>
        <AuthContext.Provider value={{ login, setLogin }}>
          <LangContext.Provider value={{ lang, setLang }}>
            <Navbar Logout={Logout} handleClick={handleClick} />
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
              <Route path="/course-playing">
                <CoursePlaying />
              </Route>
              <Route path="/my-class/:id">
                {login ? <MyClass /> : <Login />}
              </Route>
              <Route path="/kursus/:id">
                {login ? <DetailKursus /> : <Login />}
              </Route>
              <Route path="/user">{login ? <User /> : <Login />}</Route>
              <Route component={NotFound} />
            </Switch>
          </LangContext.Provider>
        </AuthContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
