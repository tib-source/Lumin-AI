import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./authActions";

// try and get the token from local storage or set to null if unavailable
const token = null || localStorage.getItem("auth")

let user;

try {
    user = JSON.parse(atob(token.split(".")[1]))
} catch (e) {
    console.log(e)
    user = null
}
if (typeof user == "string") {
    //Over Stringified string requires multiple JSON parse to be converted to json
    // refer to : https://stackoverflow.com/questions/42494823/json-parse-returns-string-instead-of-object
    user = JSON.parse(user)
}
const initialState = {
    loading: false,
    user,
    isAuthenticated: false,
    profile: null,
    token,
    error: null,
    success: false,
}

const setLoading = (state) => {
    state.loading = true,
        state.error = null
}

const setError = (state, { payload }) => {
    state.error = payload
    state.loading = false
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, setLoading)
            // actions for login
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token
                state.user = action.payload.user
                state.isAuthenticated = true
            }).addCase(login.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            // actions for registration 
            .addCase(register.pending, setLoading)
            .addCase(register.fulfilled, (state) => {
                state.success = true
            }).addCase(register.rejected, setError)
    }
})

export default authSlice.reducer