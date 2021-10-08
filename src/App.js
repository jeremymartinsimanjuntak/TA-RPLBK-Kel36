import './App.css';
import { React} from "react";
import Dashboard from './Components/Dashboard';
import Cardlist from './Components/Cardlist';
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default function App() {
  return (
          <BrowserRouter>
        <header className="navv">
          <div
            className="title"
            style={{
              position: "relative",
              left: "45%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <p onClick={() => alert("Dibuat oleh Kelompok 36")}>About Us</p>
          </div>
          </header>
          <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
        <Switch>
          <Route path="/" exact component={Cardlist} />
        </Switch>
        </BrowserRouter>
        );
}