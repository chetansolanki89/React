import logo from "./logo.svg";
import "./App.css";
import APIFetch from "./Components/Loader/APIFetch";
import Welcome from "./Components/Class Components/Props/Welcome";
import Hello from "./Components/Functional Components/Props/Hello";
import WelcomeState from "./Components/Class Components/State/WelcomeState";
import CounterClass from "./Components/Class Components/State/CounterClass";
import PropsParent from "./Components/Functional Components/Props/PropsParent";
import { UserGreeting } from "./Components/Functional Components/Conditional Rendering/UserGreeting";
import { NameList } from "./Components/Functional Components/List Rendering/NameList";
import { PersonList } from "./Components/Functional Components/List Rendering/PersonList";
import IndexKey from "./Components/Functional Components/List Rendering/IndexKey";
import StyleSheet from "./Components/Functional Components/CSS Styling/StyleSheet";
import Form from "./Components/Functional Components/Form Handling/Form";
import { MyMovies } from "./Components/Functional Components/Node API Fetch/MyMovies";

function App() {
  return (
    <div className="App">
      {/* <LoaderFile /> */}
      <APIFetch />
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
      {/* <UserGreeting /> */}
      {/* <NameList/> */}
      {/* <PersonList/> */}
      {/* <IndexKey/> */}
      {/* <StyleSheet /> */}
      {/* <Form /> */}
      {/* <MyMovies /> */}
    </div>
  );
}

export default App;
