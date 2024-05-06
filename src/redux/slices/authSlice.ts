import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
	value: boolean;
}

const initialState: IAuthState = {
	value: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		isTrue: state => {
			state.value = !state.value;
		},
	},
});

export const { isTrue } = authSlice.actions;

export default authSlice.reducer;
