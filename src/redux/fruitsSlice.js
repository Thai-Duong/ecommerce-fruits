import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartQuantity: 0,
  totalAmount: 0,
};

const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemsIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cart[itemsIndex].cartQuantity += 1;
      } else {
        const items = { ...action.payload, cartQuantity: 1 };
        state.cart.push(items);
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },
    delToCart: (state, action) => {
      const itemsIndex = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = itemsIndex;
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },
    descreaseCart: (state, action) => {
      const itemsIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemsIndex].cartQuantity >= 1) {
        state.cart[itemsIndex].cartQuantity -= 1;
      } else if (state.cart[itemsIndex].cartQuantity < 1) {
        const itemsIndex = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = itemsIndex;
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },
    increaseCart: (state, action) => {
      const itemsIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemsIndex].cartQuantity >= 1) {
        state.cart[itemsIndex].cartQuantity += 1;
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.cartQuantity),
        0
      );
    },
  },
});

export const { addToCart, delToCart, descreaseCart, increaseCart, clearCart } =
  fruitsSlice.actions;
export default fruitsSlice.reducer;
