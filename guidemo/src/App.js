import "./App.css";
import Products from "./Components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycleMethods from "./Components/ClassComponents/LifeCycleMethods";
import UseEffectParent from "./Components/FunctionalComponents/UseEffectParent";
import UseStatePreserve from "./Components/UseStatePreserve";
import StatePreserve from "./Components/StatePreserve";
import API from "./Components/FunctionalComponents/API";
import ProductsAPI from "./Components/ProductsAPI";
import APICall from "./Components/APICall";
import PhotoAPI from "./Components/PhotoAPI";
import { PracAPI } from "./Components/PracAPI";
import { PracticeAPI } from "./Components/PracticeAPI";

function App() {
  return (
    <div className="App">
      {/* <Products/> */}
      {/* <LifeCycleMethods/> */}
      {/* <UseEffectParent /> */}
      {/* <UseStatePreserve/> */}
      {/* <StatePreserve/> */}
      {/* <API/> */}
      {/* <ProductsAPI/> */}
      {/* <APICall/> */}
      {/* <PhotoAPI/> */}
      {/* <PracAPI/> */}
      <PracticeAPI/>
    </div>
  );
}

export default App;
