// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    information: {},
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateAccount: (state, action) => {
            state.information = action.payload;
        },
    },
});

export const { updateAccount } = accountSlice.actions;

export default accountSlice.reducer;
