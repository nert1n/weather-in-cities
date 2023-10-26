import { configureStore } from '@reduxjs/toolkit'
import citySlice from './slices/citySlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
    reducer: {
        city: citySlice,
        auth: authSlice,
    },
})