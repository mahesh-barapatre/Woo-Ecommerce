import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => { 
      //check if payload is always present in array
      if (!state.value.some((item)=>item.id===action.payload.id)) {
        // console.log(action)
        // console.log(action.payload)
        return {
          ...state,
          value: [...state.value, action.payload],
        };
      }

      console.log("Payload already exists. Returning current state.");
      return state;
    },
    remove: (state, action) => {
      const itemIdToRemove = action.payload;
      const updatedList = state.value.filter(item => (item.id !== itemIdToRemove));
      state.value = updatedList;
      state.total -= 1;
    },
    totalAdded: (state) =>{
      state.total = state.value.length
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, totalAdded } = cartSlice.actions

export default cartSlice.reducer