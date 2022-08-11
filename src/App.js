import {
Router,
} from "react-router-dom";
import "./App.css";
import Main from './routes/main';
import { ToastContainer} from "react-toastify";
import { browserHistory } from "./utils/history";

const App = () => {
  return (
    <>
        <ToastContainer />
        <Main />
    </>
  );
}

export default App;
