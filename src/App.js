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
    localStorage.removeItem("data_user");
    setLogin(null);
  };
  return (
    <Router>
      <CartContext.Provider value={{ value, setValue }}>
        <AuthContext.Provider value={{ login, setLogin }}>
          <Navbar Logout={Logout} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/my-class">
              <MyClass />
            </Route>
            <Route path="/user/:id">{login ? <User /> : ""}</Route>
            <Route path="/kursus-saya/:id" exact component={KursusSaya}/>
          </Switch>
        </AuthContext.Provider>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
