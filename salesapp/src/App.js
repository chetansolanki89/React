import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Body />
        <Footer />
    </div>
  );
};

export default App;
