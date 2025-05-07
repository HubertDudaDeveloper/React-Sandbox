import "@/features/Checkout/styles/Checkout.scss";
import UIInput from "@/features/Common/components/UIInput";

export const Checkout = () => {
  return (
    <div className="checkout">
      <form className="checkout__form">
        <UIInput value="" onChange={() => {}}/>
      </form>
    </div>
  );
}

export default Checkout;