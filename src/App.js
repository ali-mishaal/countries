import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Countries} from "./component/Countries";
import Home from "./component/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App" >
           <Router>
               <Switch>
                   <Home/>



               </Switch>
           </Router>



    </div>
  );
}

export default App;
