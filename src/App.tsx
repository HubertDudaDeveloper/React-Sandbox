import '@/styles/App.scss';
import ToDo from './components/ToDo';
import ToDoAdvanced from './components/ToDoAdvanced';
import Counter from './components/Counter';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const { theme, toggleTheme }  = useTheme();

  return (
    <div className={theme}>
      <ToDoAdvanced/>
      <button onClick={toggleTheme}>Zmień theme</button>        
    </div>
  );
};

export default App;
