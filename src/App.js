import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import Main from './routes/main';
import history from "./utils/history";
import { ToastContainer} from "react-toastify";

function App() {

  return (
    <>
      <Router history={history}>
        <ToastContainer />
        <Main />
      </Router>
    </>

  );
}

export default App;
