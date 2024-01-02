
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { Box } from './component/Box';
// import {useState } from 'react';

function App() {
  //const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state=>state.count)
  const id = useSelector(state=>state.id)
  const password = useSelector(state=>state.password)
  const onClickCount = ()=>{
   dispatch({type:"INCREAMENT", payload:{num:5}})
   dispatch({type:"LOGIN",payload:{id:"kiki",password:"haha"}})
   // setCount(count+1)
  }
  return (
    <div className="App">
      <div>{count}</div>
      <div>{id}</div>
      <div>{password}</div>
      <button onClick={onClickCount} >카운트업</button>
      <Box/>
    </div>
  );
}

export default App;
