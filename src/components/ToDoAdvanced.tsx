import { useState } from "react";

export interface IToDoState {
  id: number,
  text: string,
  isDone: boolean
}

const ToDoAdvanced = () => {
  const [value, setValue] = useState<string>('');

  const [taskCollection, setTaskCollection] = useState<IToDoState[]>([]);

  const greenCheckmark = '✅';

  return (
    <div className="todo">
      <div className="todo-list">
        {
          taskCollection.map((task, index) => (            
            <div key={`task-${index}`}>
              <li>
                {task.text} 
              </li>
              <button onClick={() => setTaskCollection(prev => prev.filter((task, taskIndex) => taskIndex !== index))}>
                Usuń
              </button>
              <input
                type="checkbox"
                onChange={
                  () => {
                    taskCollection[index].isDone = !taskCollection[index].isDone;
                    setTaskCollection([...taskCollection])
                  }
                }
              />
              <p>{ task.isDone ? greenCheckmark : '' }</p>
            </div>
          ))
        }
      </div>
      <input
        value={value}
        placeholder="Zadanie"
        onChange={(e) => setValue(e.target?.value)}
      />
      <button onClick={() => {
        setTaskCollection(prev => [
          ...prev,
          {
            id: prev.length,
            text: value,
            isDone: false
          }
        ])
      }}>Dodaj zadanie</button>
    </div>
  );
};

export default ToDoAdvanced;