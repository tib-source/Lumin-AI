import { createAsyncThunk } from "@reduxjs/toolkit"

let backendURL;
if (import.meta.env.MODE === "production") {
    backendURL = 'https://lumin-backend.vercel.app/'
} else {
    backendURL = 'localhost:5000'
}
console.log(import.meta.env)
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
            thunkAPI.rejectWithValue(error)

        }
    }
)


export const register = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            console.log(JSON.stringify(userData))
            const response = await fetch(`${backendURL}/api/user/register`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(userData)
            }).then(
                (result) => result.json()
            ).then(
                (data) => data
            )

            return response
        } catch (error) {
            console.log(error)
            thunkAPI.rejectWithValue(error)

        }

    }
)