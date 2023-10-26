import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Киев',
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        syncState: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { syncState } = citySlice.actions

export default citySlice.reducer