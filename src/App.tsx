import '@/styles/App.scss';
import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';
import { useTheme } from '@/hooks/ThemeHook';
import { useState } from 'react';
import { EProductSlice } from './store/productSlice';
import { ECartSlice } from './store/cartSlice';

const App = () => {
  const { theme, toggleTheme }  = useTheme();

  const [component, setComponent] = useState<string>(EProductSlice.NAME);

  return (
    <div className={theme}>
      <button onClick={() => setComponent(EProductSlice.NAME)}>
        Lista produktów
      </button>

      <button onClick={() => setComponent(ECartSlice.NAME)}>
        Koszyk
      </button>
      { component === EProductSlice.NAME ? <ProductList/> : <Cart/> }
      <button onClick={toggleTheme}>Zmień theme</button>        
    </div>
  );
};

export default App;
