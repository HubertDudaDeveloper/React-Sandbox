import { useState } from "react";

const ToDo = () => {
  const [value, setValue] = useState<string>('');

  const [taskCollection, setTaskCollection] = useState<string[]>([]);

  return (
    <div className="todo">
      <div className="todo-list">
        {
          taskCollection.map((task, index) => (
            <li key={`task-${index}`}>
              {task}
            </li>
          ))
        }
      </div>
      <input
        value={value}
        placeholder="Zadanie"
        onChange={(e) => setValue(e.target?.value)}
      />
      <button onClick={() => {
        setTaskCollection(prev => [...prev, value])
      }}>Dodaj zadanie</button>
    </div>
  );
};

export default ToDo;