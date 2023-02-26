import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  deposit: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => (state = action.payload),
    // decrement: (state) => {
    //   state.value -= 1;
    // },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { createUser } = userSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
