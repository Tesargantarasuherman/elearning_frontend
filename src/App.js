import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
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

function App() {

  const [value, setValue] = useState(0);
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("data_user"))
  );
  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem("data_user")));
  }, []);
  const Logout=()=>{
    localStorage.removeItem("data_user")
    setLogin(null)
  }
  return (
    <CartContext.Provider value={{ value, setValue }}>
      <AuthContext.Provider value={{ login, setLogin }}>
        <Router>
          <Navbar Logout={Logout}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
 
            <Route path="/blog">
            {
              login ?
              <Blog />
              :''
            }
            </Route>
            <Route path="/my-class">
              <MyClass />
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
