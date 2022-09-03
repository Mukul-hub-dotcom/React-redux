
import { useSelector } from 'react-redux';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Todo} from "./Components/Todo/Todo"


function App() {
  const globalState=useSelector((state)=>state)
  console.log(globalState)
  return (
    <div className="App">
        <Counter/>
        <br />
        <Todo/>
    </div>
  );
}

export default App;
