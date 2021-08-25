import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetStarted from "./components/get-started/getstarted";
import Active from "./components/active-stores/active";
import AshleyChase from "./components/ashleychase/ashleychase";
import FeaturedCollection from "./components/featured-collection/featured-collection";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Switch>
      <Route path="/featuredcollection">
        <div>
          <Header />
          <FeaturedCollection />
          <Footer />
        </div>
      </Route>
      <Route path="/ashleychase">
        <div>
          <Header />
          <AshleyChase />
          <Footer />
        </div>
      </Route>
      <Route path="/active">
        <div>
          <Header />
          <Active />
          <Footer />
        </div>
      </Route>
      <Route path="/get-started">
        <div>
          <Header />
          <GetStarted />
          <Footer />
        </div>
      </Route>
      <Route path="/">
        <div>
          <Header />
          <Hero />
          <Footer />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
