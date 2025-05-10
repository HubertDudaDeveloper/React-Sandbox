import "@/features/Checkout/styles/Checkout.scss";
import UIInput from "@/features/Common/components/UIInput";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { ECheckoutSlice, ICheckoutForm, setCheckoutForm } from "./store/checkoutSlice";
import { useState } from "react";
import { store } from "@/store/store";

export const Checkout = () => {
  const {
    isError,
    isLoading,
    form: storeForm,
  } = useAppSelector((store) => store[ECheckoutSlice.NAME]);

  const [form, setForm] = useState<ICheckoutForm>(storeForm);

  const [isSuccess, setSuccess] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmitForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(setCheckoutForm(form));
    
    setTimeout(() => {
      const latestIsError = store.getState().checkout.isError;

      if (latestIsError) {
        console.log('jest błąd')
        return;
      } else {
        console.log('nie ma błędu');
        setSuccess(true);
      }
      
    }, 500)
  }

  return (
    <div className="checkout">
      <form className="checkout__form">
        <UIInput
          name="name"
          label="Imię"
          placeholder="Wpisz imię"
          required
          value={form.name}
          onChange={(value) => {
            setForm({ ...form, name: value });
          }}
        />
        <UIInput
          name="lastname"
          label="Nazwisko"
          placeholder="Wpisz nazwisko"
          required
          value={form.lastname}
          onChange={(value) => {
            setForm({ ...form, lastname: value });
          }}
        />
        <div className="checkout__address">
          <UIInput
            name="postalcode"
            label="Kod Pocztowy"
            placeholder="Wpisz kod pocztowy 00-000"
            required
            value={form.address.postal}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, postal: value } });
            }}
          />
          <UIInput
            name="city"
            label="Miasto"
            placeholder="Wpisz miasto"
            required
            value={form.address.city}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, city: value } });
            }}
          />
          <UIInput
            name="street"
            label="Ulica"
            placeholder="Wpisz ulicę"
            required
            value={form.address.street}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, street: value } });
            }}
          />
          <UIInput
            name="number"
            label="Numer"
            placeholder="Wpisz numer"
            required
            value={form.address.number}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, number: value } });
            }}
          />
          <UIInput
            name="apartament"
            label="Mieszkanie"
            placeholder="Wpisz mieszkanie"
            value={form.address.apartament}
            onChange={(value) => {
              setForm({ ...form, address: { ...form.address, apartament: value } });
            }}
          />
        </div>
        <UIInput
          name="email"
          label="Email"
          placeholder="Wpisz email"
          required
          value={form.email}
          onChange={(value) => {
            setForm({ ...form, email: value });
          }}

        />
        <UIInput
          name="phone"
          label="Telefon"
          placeholder="Wpisz numer telefonu"
          required
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
        { isError ? (<div>Popraw formularz!</div>) : (<></>) }
        { isSuccess ? (<div>Dziękuje {form.name} za zakupy!</div>) : (<></>) }
      </div>
    </div>
  );
};

export default Checkout;
