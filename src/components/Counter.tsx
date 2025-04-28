import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      { count }

      <button onClick={() => setCount(prev => prev + 2)}>Inc 2</button>
      <button onClick={() => setCount(prev => prev - 2)} disabled={count <= 0 }>Dec 2</button>

    </div>
  )
}

export default Counter;