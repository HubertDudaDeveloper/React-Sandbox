import "@/features/Checkout/styles/Checkout.scss";
import UIInput from "@/features/Common/components/UIInput";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { ECheckoutSlice, ICheckoutForm, setCheckoutForm } from "./store/checkoutSlice";
import { useState } from "react";

export const Checkout = () => {
  const {
    isError,
    isLoading,
    form: storeForm,
  } = useAppSelector((store) => store[ECheckoutSlice.NAME]);

  const [form, setForm] = useState<ICheckoutForm>(storeForm);

  const dispatch = useAppDispatch();

  const handleSubmitForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(setCheckoutForm(form));
  }

  return (
    <div className="checkout">
      <form className="checkout__form">
        <UIInput
          value={form.name}
          onChange={(value) => {
            setForm({ ...form, name: value });
          }}
        />
        <UIInput
          value={form.lastname}
          onChange={(value) => {
            setForm({ ...form, lastname: value });
          }}
        />
        <div className="checkout__address">
          <UIInput
            value={form.address.postal}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, postal: value } });
            }}
          />
          <UIInput
            value={form.address.city}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, city: value } });
            }}
          />
          <UIInput
            value={form.address.street}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, street: value } });
            }}
          />
          <UIInput
            value={form.address.number}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, number: value } });
            }}
          />
          <UIInput
            value={form.address.apartament}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, apartament: value } });
            }}
          />
        </div>
        <UIInput
          value={form.email}
          onChange={(value) => {
            setForm({ ...form, email: value });
          }}

        />
        <UIInput
          value={form.phone}
          onChange={(value) => {
            setForm({ ...form, phone: value });
          }}
        />
        <button type="submit" onClick={(e) => handleSubmitForm(e)}>
          Wyślij dane
        </button>
      </form>
      <div>
        { storeForm.name } { storeForm.lastname }
      </div>
    </div>
  );
};

export default Checkout;
