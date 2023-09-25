import React, {useState, useEffect} from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  // create an array to track the count for each counter separately
  const [counterCounts, setCounterCounts] = useState([0, 0, 0]);

  // add one counter and set the new counter's count equals to zero
  const addCounter = () => {
    setCounterCounts([...counterCounts, 0]);
  };

  // iterate through the counters and increment their respective counts
  const incrementAll = () => {
    setCounterCounts((prevCounts) => prevCounts.map((count) => count + 1));
  };

  // manage the count state for each counter and pass the count and an update function to each Counter component
  // (to solve the problem: updates in each individual Counter component are not reflected in the counterCounts state in App.js component.)
  const handleIncrement = (index) => {
    const updatedCounts = [...counterCounts];
    updatedCounts[index] += 1;
    setCounterCounts(updatedCounts);
  };

  const counterComponents = counterCounts.map((count, index) => (
    <Counter
      key={index}
      count={count}
      onIncrement={() => handleIncrement(index)}
    />
  ));

  // useEffect(() => {
  //   console.log(counterCounts);
  // }, [counterCounts]);

  return (
    <div className="container">
      <button className="all" onClick={incrementAll}>
        All +1
      </button>
      <div>{counterComponents}</div>
      <button className="add" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
}

export default App;
