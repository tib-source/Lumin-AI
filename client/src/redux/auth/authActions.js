import { createAsyncThunk } from "@reduxjs/toolkit"


const backendURL = 'http://127.0.0.1:5000'

export const login = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {

            console.log((userData))
            const response = await fetch(`${backendURL}/api/user/auth/`, {
                "method": "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)

            }).then(res => res.json()).then(data => {

                if (data.message == "Authorised") {
                    localStorage.setItem("auth", data.token)
                    console.log("Token has been locally saved ")
                }
                return data
            })
            return response
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)