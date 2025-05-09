import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ECheckoutSlice {
  NAME = "checkout",
}

export interface ICheckoutForm {
  name: string,
  lastname: string,
  address: {
    street: string,
    number: string,
    apartament: string,
    city: string,
    postal: string
  },
  phone: string,
  email: string
}

interface ICheckoutState {
  isLoading: boolean,
  isError: boolean,
  form: ICheckoutForm,
}

enum ERequiredKeys {
  NAME = 'name',
  LASTNAME = 'lastname',
  STREET = 'street',
  NUMBER = 'number',
  CITY = 'city',
  POSTAL = 'postal',
  EMAIL = 'email',
  PHONE = 'phone'
}

const initialState: ICheckoutState = {
  isLoading: false,
  isError: false,
  form: {
    name: '',
    lastname: '',
    address: {
      street: '',
      number: '',
      apartament: '',
      city: '',
      postal: ''
    },
    phone: '',
    email: ''
  },
}

const checkoutSlice = createSlice({
  name: ECheckoutSlice.NAME,
  initialState,
  reducers: {
    setIsLoading(state: ICheckoutState, action: PayloadAction<boolean>): void {
      state.isLoading = action.payload;
    },
    setIsError(state: ICheckoutState, action: PayloadAction<boolean>): void {
      state.isError = action.payload;
    },
    setCheckoutForm(state: ICheckoutState, action: PayloadAction<ICheckoutForm>): void {
      const formCopy = { ...action.payload };
      
      const personalDataEmpty = Object.values(formCopy).includes('');
      const addressDataEmpty = Object.values(formCopy.address).includes('')

      if (personalDataEmpty || addressDataEmpty) {
        state.isError = true;
        console.log(Object.values(formCopy), Object.values(formCopy.address))
        return;
      }

      state.isError = false;

      state.form = action.payload;
    }
  },
});
export const { setIsLoading, setIsError, setCheckoutForm } = checkoutSlice.actions;
export default checkoutSlice.reducer;