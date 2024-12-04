// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import accountSlice from '../features/account/accountSlice';

export const store = configureStore({
    reducer: {
        account: accountSlice,
    },
});

export default store;
