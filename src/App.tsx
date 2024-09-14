/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable prefer-const */
import './App.css';
import { Dispatch, SetStateAction, useState } from 'react';

type CounterProps = {
  updateTheCounter: () => void;
  counterValue: number;
};

// type TodoProps = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

function Counter({
  updateTheCounter,
  counterValue,
}: CounterProps): JSX.Element {
  return (
    <section>
      <h1>Counter 1:</h1>
      <p>You have clicked {counterValue} times</p>
      <button type="button" onClick={() => updateTheCounter()}>
        Click me
      </button>
    </section>
  );
}

function ToDo(): JSX.Element {
  return (
    <section>
      <h1>Get the user data</h1>
      <button type="button">Get details</button>
    </section>
  );
}

function App() {
  let [counterValue, setCounterValue]: [
    number,
    Dispatch<SetStateAction<number>>,
  ] = useState(0);
  return (
    <>
      <Counter
        updateTheCounter={() => setCounterValue(counterValue + 1)}
        counterValue={counterValue}
      />
      <ToDo />
    </>
  );
}

export default App;
