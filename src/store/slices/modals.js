import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerModal: false
}

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOpen: (state, {payload}) => {
            state[payload] = true
        },
        modalClose: (state, {payload}) => {
            state[payload] = false
        },
    }
})

export const {modalOpen, modalClose} = ModalSlice.actions

export default ModalSlice.reducer