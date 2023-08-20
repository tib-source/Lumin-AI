import { createSlice } from "@reduxjs/toolkit"
import { login } from "./authActions";

const token = null || localStorage.getItem("auth")

const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
    success: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true,
                state.error = null
        }).addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        }).addCase(login.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
    }
})

export const { setToken, setUser, unsetUser } = authSlice.actions
export default authSlice.reducer