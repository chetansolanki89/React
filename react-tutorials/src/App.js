import logo from "./logo.svg";
import "./App.css";
import APIFetch from "./Components/Loader/APIFetch";
import Welcome from "./Components/Class Components/Props/Welcome";
import Hello from "./Components/Functional Components/Props/Hello";
import WelcomeState from "./Components/Class Components/State/WelcomeState";
import CounterClass from "./Components/Class Components/State/CounterClass";
import PropsParent from "./Components/Functional Components/Props/PropsParent";
import { UserGreeting } from "./Components/Functional Components/Conditional Rendering/UserGreeting";

function App() {
  return (
    <div className="App">
      {/* <LoaderFile /> */}
      {/* <APIFetch /> */}
      {/* <Welcome name="Bruce" hero="Batman" />
      <Welcome name="Peter" hero="Spiderman">
        <p>Robin is on the way...</p>
      </Welcome>
      <Hello name="Chetan" hero="Dr. Strange" />
      <Hello name="Jack" hero="Sparrow">
        <p>Let's board the ship...</p>
      </Hello> */}
      {/* <WelcomeState /> */}
      {/* <CounterClass/> */}
      {/* <PropsParent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
