import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    total: 0,
  },
  reducers: {
    addInTotal: (state, action) => {
      state.total += action.payload;
      },
    subsInTotal: (state, action) => {
      if (state.total - action.payload < 0) return;
      else
        state.total -= action.payload;
      },
  },
});

export const { addInTotal, subsInTotal } = paymentSlice.actions;

export default paymentSlice.reducer;
