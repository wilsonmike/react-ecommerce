import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
