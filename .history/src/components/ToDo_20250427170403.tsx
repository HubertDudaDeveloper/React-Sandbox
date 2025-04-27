import { useState } from "react";

const ToDo = () => {
  const [value, setValue] = useState('');

  return (
    <div className="todo">
      <input
        value={value}
        placeholder="Zadanie"
        onChange={(e) => setValue(e.target?.value)}
      />
      <button>Dodaj zadanie</button>
    </div>
  );
};

export default ToDo;