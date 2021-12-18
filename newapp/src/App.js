// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Components/Routing";
import ToDoList from "./Components/Programs/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <Routing /> */}
      <ToDoList />
    </div>
  );
}

export default App;
