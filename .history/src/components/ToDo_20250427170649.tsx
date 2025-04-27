import { useState } from "react";

const ToDo = () => {
  const [value, setValue] = useState('');

  return (
    <div className="todo">
      <div className="todo-list">
        {}
      </div>
      <input
        value={value}
        placeholder="Zadanie"
        onChange={(e) => setValue(e.target?.value)}
      />
      <button onClick={(e) => {}}>Dodaj zadanie</button>
    </div>
  );
};

export default ToDo;