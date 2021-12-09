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
import Navbar from "./components/Navbar";
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

function App() {
  const [value, setValue] = useState(0);
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("data_user"))
  );
  const history = useHistory();

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("data_user")));
  }, []);
  const Logout = () => {
    toast.success("Anda Telah Keluar");
    setTimeout(() => {
      localStorage.removeItem("data_user");
      setLogin(null);
    }, 1000);
  };
  return (
    <Router>
      <ToastContainer />
      <CartContext.Provider value={{ value, setValue }}>
        <AuthContext.Provider value={{ login, setLogin }}>
          <Navbar Logout={Logout} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">{login ? <Home /> : <Login />}</Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/my-class/:id">
              {login ? <MyClass /> : <Login />}
            </Route>
            <Route path="/kursus/:id">
              {login ? <DetailKursus /> : <Login />}
            </Route>
            <Route path="/profile">{login ? <User /> : <Login />}</Route>
            <Route component={NotFound} />
          </Switch>
        </AuthContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
