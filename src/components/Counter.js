import React, { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count);
  useEffect(() => console.log(count));
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Set Zero</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}

export default Counter;
