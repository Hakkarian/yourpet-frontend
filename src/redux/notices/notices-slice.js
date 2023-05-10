import {createSlice} from '@reduxjs/toolkit'

const noticesSlice = createSlice({
    name: 'notices',
    initialState: {
        notices: []
        // and so on
    },
    extraReducers: builder => {
        // and so on
    }
})

export default noticesSlice.reducer;