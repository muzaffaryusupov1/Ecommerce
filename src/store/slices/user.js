import { createSlice } from "@reduxjs/toolkit";


let userInitial = {
    email: '',
    password: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
}

let initialState = {
    user: JSON.parse(localStorage.getItem('user')) || userInitial,
    isAuth: !!JSON.parse(localStorage.getItem('user'))?.email || false,
    loading: false,
}

function setUserWithLocale(user) {
    localStorage.setItem('user', JSON.stringify(user))
    return user
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, { payload }) => {
            state.isAuth = payload
        },
        setUser: (state, { payload }) => {
            state.user = setUserWithLocale({ ...state.user, ...payload });
        },
        setLocale: (state) => {
            state.user = setUserWithLocale([]);
        }
    }
})

export const { setIsAuth, setUser, setLocale } = UserSlice.actions

export default UserSlice.reducer