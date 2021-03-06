import "./App.css";
// import Button from "react-bootstrap/Button";
// import { Caros } from "./Components/Caros";
// import { Carosbutton } from "./Components/Carosbutton";
// import ClassComp from "./Components/classcomponent/ClassComp";
// import ClassComp1 from "./Components/classcomponent/ClassComp1";
import MappingParent from "./Components/FunctionalComponents/MappingParent";
import FilteringParent from "./Components/FunctionalComponents/FilteringParent"; //Cart

import { Counter } from "./Components/FunctionalComponents/Counter"; //Counter

import { Tabs, Tab } from "react-bootstrap";
import ConditionalRender from "./Components/ConditionalRendering/ConditionalRender";
import ConditionalPhoto from "./Components/ConditionalRendering/ConditionalPhoto";
import { productsData } from "./Components/FunctionalComponents/filteringReducer";
import FilterPPrac from "./Components/FunctionalComponents/FilterPPrac";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Watch from "./Components/FunctionalComponents/Watch";
import ContextParent from "./Components/ContextAPI/ContextParent";

function App() {
  return (
    <div className="App">
      <ContextParent/>
      {/* <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<MappingParent/>}
          />
          <Route
            path="/counter"
            element={<Counter/>}
          />
          <Route
            path="/mapping"
            element={<MappingParent />}
          />
          <Route
            path="/conditionalRender"
            element={<ConditionalRender />}
          />
          <Route
            path="/watch"
            element={<Watch/>}
          />
        </Routes>
      </BrowserRouter> */}
      {/* <ClassComp1/>
      <ClassComp/>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Carosbutton/>
      <Caros />
      <Carosbutton/> */}
      {/* <MappingParent /> */}

      {/* <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >

        <Tab eventKey="dryfruits" title="Dry Fruits">
          <FilteringParent pval={"dry fruits"} />
        </Tab>
        <Tab eventKey="pulses" title="Pulses">
          <FilteringParent pval={"pulses"} />
        </Tab>
        <Tab eventKey="flour" title="Flours">
          <FilteringParent pval={"flour"} />
        </Tab>
        <Tab eventKey="grains" title="Grains">
          <FilteringParent pval={"grains"} />
        </Tab>
      </Tabs> */}

      {/* <ConditionalRender /> */}

      {/* <FilterPPrac productData={productsData} /> */}

      {/* <ConditionalPhoto/> */}

      {/* <Counter/>  */}
    </div>
  );
}

export default App;
