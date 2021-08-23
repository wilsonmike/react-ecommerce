import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetStarted from "./components/get-started/getstarted";

function App() {
  return (
    <Switch>
      <Route path="/get-started">
        <div>
          <Header />
          <GetStarted />
        </div>
      </Route>
      <Route path="/">
        <div>
          <Header />
          <Hero />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
