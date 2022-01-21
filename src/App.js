import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const dispatch = useDispatch();



  return (
    <div className="App">
     
    
      <h1>Count {counter}</h1>

     <button onClick={() => dispatch(increment(5))} > Increase</button>
     <button onClick={() => dispatch(decrement(1))} > Decrease</button>
     
      {islogged? <h2>you are logged in </h2>:''}
     
    </div>
  );
}

export default App;
