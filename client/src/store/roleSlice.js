import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
    name: "role",
    initialState: {
        role: "",
    },
    reducers: {
        setRole: (state, action) => {
            // console.log(state.role);
            // console.log(action.payload);
            state.role = action.payload
            // console.log(state.role);
        }
    },
})

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
