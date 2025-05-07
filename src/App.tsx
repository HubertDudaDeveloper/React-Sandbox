import '@/styles/App.scss';
import Cart from '@/features/Cart/Cart';
import ProductList from '@/features/Products/ProductList';
import Checkout from '@/features/Checkout/Checkout';
import { useTheme } from '@/features/Theme/hooks/ThemeHook';
import { ReactNode, useMemo, useState } from 'react';
import { EProductSlice } from '@/features/Products/store/productSlice';
import { ECartSlice } from '@/features/Cart/store/cartSlice';
import { ECheckoutSlice } from '@/features/Checkout/store/checkoutSlice';

const App = () => {
  const { theme, toggleTheme }  = useTheme();
  const [component, setComponent] = useState<string>(EProductSlice.NAME);

  const handleGoToCheckout = () => setComponent(ECheckoutSlice.NAME)

  const componentSwitch: ReactNode = useMemo(() => {
    switch(component) {
      case EProductSlice.NAME:
        return <ProductList/>;
      case ECartSlice.NAME:
        return <Cart onGoToCheckout={handleGoToCheckout} />;
      case ECheckoutSlice.NAME:
        return <Checkout/>
      default:
        return <ProductList/>;
    }
  }, [component]);

  return (
    <div className={theme}>
      <button onClick={() => setComponent(EProductSlice.NAME)}>
        Lista produktów
      </button>

      <button onClick={() => setComponent(ECartSlice.NAME)}>
        Koszyk
      </button>
      { componentSwitch }
      <button onClick={toggleTheme}>Zmień theme</button>        
    </div>
  );
};

export default App;
