import Register from "./Register";
import Request from "./shared/IP/auth/request";
import { register } from "./shared/IP/auth/register";
import {useSelector, useDispatch} from 'react-redux'

import { increment, decrement, reset } from "./store";
function App() {

  const count = useSelector(state => state)
  const dispatch = useDispatch()

  // let res = register().then(res => console.log(res))

  // console.log(res)
  return (
    <div className="App">
      {/* <Register/>
      <Request/> */}
     <h1>{count}</h1>
     <button onClick={() => dispatch(increment)}>+</button>
     <button onClick={() => dispatch(decrement)}>-</button>
     <button onClick={() => dispatch(reset)}>reset</button>
    </div>
  );
}

export default App;
