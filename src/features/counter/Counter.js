import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count} dupa</h1>
      <button
        onClick={() => {
          dispatch(incrementByAmount(3));
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        subtract
      </button>

      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
