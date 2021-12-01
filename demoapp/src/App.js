import "./App.css";
// import Button from "react-bootstrap/Button";
// import { Caros } from "./Components/Caros";
// import { Carosbutton } from "./Components/Carosbutton";
// import ClassComp from "./Components/classcomponent/ClassComp";
// import ClassComp1 from "./Components/classcomponent/ClassComp1";
// import MappingParent from "./Components/FunctionalComponents/MappingParent";
import FilteringParent from "./Components/FunctionalComponents/FilteringParent"; //Cart

// import { Counter } from "./Components/FunctionalComponents/Counter"; //Counter


import { Tabs, Tab } from "react-bootstrap";

function App() {

  return (
    <div className="App">
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

      <Tabs
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
      </Tabs>


      {/* <Counter/>  */}
    </div>
  );
}

export default App;
