import HomePage from "./components/home-page";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import GetStartedPage from "./components/get-started";
import AshleyChasePage from "./components/ashley-chase-page";
import SingleProduct from "./components/single-product/single-product";
import CartPage from "./components/pages/cart-page/cart-page";
import StartForm from "./components/start-form";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/get-started" component={GetStartedPage} />
      <Route path="/product/:id" component={SingleProduct} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/ashleychase" component={AshleyChasePage} />
      <Route exact path="/startform" component={StartForm} />
      <Route path="*" component={HomePage} />
    </Switch>
  );
}

export default App;
