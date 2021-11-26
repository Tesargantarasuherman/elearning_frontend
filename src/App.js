import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"; import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Navbar from './components/Navbar';
import { CartContext } from "./context/CartContex";
import { useState } from 'react';
import Home from "./pages/Home";
import Login from './pages/Login';
import Blog from "./pages/Blog";
import MyClass from "./pages/MyClass";

const App = () => {
  const [value,setValue] = useState(0)
  return (
    <CartContext.Provider value={{ value, setValue }}>
      <Router>
        <Navbar />
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
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
