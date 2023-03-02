import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  deposit: 0,
  balance: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => (state = action.payload),
    deleteUser: (state) => (state = initialState),
    // decrement: (state) => {
    //   state.value -= 1;
    // },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { createUser, deleteUser } = userSlice.actions;

export const getName = (state) => state.user.name;
export const getDeposit = (state) => state.user.deposit;
export const getBalance = (state) => state.user.balance;

export default userSlice.reducer;
