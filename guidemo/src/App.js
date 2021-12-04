import "./App.css";
import Products from "./Components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleMethods from "./Components/ClassComponents/LifeCycleMethods";
import UseEffectParent from "./Components/FunctionalComponents/UseEffectParent";

function App() {
  return (
    <div className="App">
      {/* <Products/> */}
      {/* <LifeCycleMethods/> */}
      <UseEffectParent />
    </div>
  );
}

export default App;
