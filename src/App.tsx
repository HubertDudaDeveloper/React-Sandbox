import '@/styles/App.scss';
import ToDo from '@/components/ToDo';
import ToDoAdvanced from '@/components/ToDoAdvanced';
import Counter from '@/components/Counter';
import ProductList from '@/components/ProductList';
import { useTheme } from '@/hooks/ThemeHook';

const App = () => {
  const { theme, toggleTheme }  = useTheme();

  return (
    <div className={theme}>
      <ProductList/>
      <button onClick={toggleTheme}>Zmień theme</button>        
    </div>
  );
};

export default App;
