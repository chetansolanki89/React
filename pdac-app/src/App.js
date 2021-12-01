import "./App.css";
import { Navigation } from "./Components/Navigation";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Propss from "./Components/FunctionalComps/PropsParent";
import Props1 from "./Components/FunctionalComps/Props1";
import { ParentProps } from "./Components/Propss/ParentProps";
import { PPropClass } from "./Components/Propss/PPropClass";

function App() {
  const uName = "Chets";
  const uID = 777;
  const mobile = 9876543210;
  return (
    <div className="App">
      {/* <Navigation />
      <Body />
      <Footer /> */}
      {/* <Propss/> */}
      {/* <Props1 name={uName} id={uID} mob={mobile} /> */}
      <ParentProps/>
      <h1>====================================================</h1>

      <PPropClass/>
    </div>
  );
}

export default App;
