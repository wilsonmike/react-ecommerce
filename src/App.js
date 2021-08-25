import HomePage from "./components/home-page";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import GetStartedPage from "./components/get-started";
import AshleyChasePage from "./components/ashley-chase-page";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/get-started" component={GetStartedPage} />
      <Route exact path="/ashleychase" component={AshleyChasePage} />
      {/* <Route path="/featuredcollection">
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
      </Route> */}
    </Switch>
  );
}

export default App;
