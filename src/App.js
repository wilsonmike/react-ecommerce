import HomePage from "./components/home-page";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import GetStartedPage from "./components/get-started";
import AshleyChasePage from "./components/ashley-chase-page";
import SingleProduct from "./components/single-product/single-product";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/get-started" component={GetStartedPage} />
      <Route path='/product/:id' component={SingleProduct} />
      <Route exact path="/ashleychase" component={AshleyChasePage} />
    </Switch>
  );
}

export default App;
