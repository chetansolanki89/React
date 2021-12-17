import "./App.css";
import { Provider } from "react-redux";
import configStore from "./state/store/configStore";
import Products from "./Components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { LiveAPI } from "./Components/LiveAPI";
import ClassLifeCount from "./Components/ClassComponents/ClassLifeCount";
import NavBar from "./Components/NavBar";
import ReduCounter from "./Components/ReduCounter";
import CounterReducer from "./Components/CounterReducer";
import PracUseReducer from "./Components/PracUseReducer";
import CheckRedux from "./Components/CheckRedux";
import BooksAPI from "./Components/BooksAPI";
import BookAPIChild from "./Components/BookAPIChild";

function App() {
  const localStore = configStore();
  return (
    <div className="App">
      <div>
        <Provider store={localStore}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<ProductsAPI />} />
              <Route path="/api" element={<APICall />} />
              <Route path="/photo" element={<PhotoAPI />} />
              <Route path="/live" element={<LiveAPI />} />
              <Route path="/reducounter" element={<ReduCounter />} />
              <Route path="/counterreducer" element={<CounterReducer />} />
              <Route path="/pracusereducer" element={<PracUseReducer />} />
              <Route path="/checkredux" element={<CheckRedux/>} />
              <Route path="/booksapi" element={<BooksAPI/>} />
              <Route path="/booksapichild" element={<BookAPIChild/>} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>

      {/* <Products/> */}
      {/* <LifeCycleMethods/> */}
      {/* <UseEffectParent /> */}
      {/* <UseStatePreserve/> */}
      {/* <StatePreserve/> */}
      {/* <API/> */}
      {/* <ProductsAPI /> */}
      {/* <APICall/> */}
      {/* <PhotoAPI/> */}
      {/* <PracAPI/> */}
      {/* <PracticeAPI/> */}
      {/* <LiveAPI/> */}
      {/* <ClassLifeCount/> */}
    </div>
  );
}

export default App;
