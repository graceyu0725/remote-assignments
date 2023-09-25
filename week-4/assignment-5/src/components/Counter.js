import React, {useEffect, useState} from "react";

function Counter({ count, onIncrement }) {

  return (
    <div className="counter">
      <button className="ind" onClick={onIncrement}>
        + 1
      </button>
      <span className="number">{count}</span>
    </div>
  );
}

export default Counter;
