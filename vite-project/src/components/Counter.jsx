import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";
function Counter() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  const handleincrement = (num) => {
    dispatch(increment(num));
  };
  const handledecrement = (num) => {
    dispatch(decrement(num));
  };
  return (
    <div>
      <button onClick={() => handleincrement(1)}>+</button>
      <button onClick={() => handleincrement(2)}>+2</button>
      <span>Counter:{count}</span>
      <button onClick={() => handledecrement(1)}>-</button>
    </div>
  );
}

export default Counter;
