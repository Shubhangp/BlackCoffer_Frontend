import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        details: "notexist"
    },
    reducers: {
        loginData: (state, action) => {
            state.details=(action.payload);
        }
    },
});

export const { loginData } = loginSlice.actions;
export default loginSlice.reducer;