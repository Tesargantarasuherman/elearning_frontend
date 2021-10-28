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
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
