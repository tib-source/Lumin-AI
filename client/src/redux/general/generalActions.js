import { createAsyncThunk } from "@reduxjs/toolkit"
// import { getProdBackend, getDevBackend } from "../util"

let backendURL;

if (import.meta.env.PROD) {
    backendURL = 'https://lumin-backend.onrender.com'
} else {
    // backendURL = 'localhost:5000'
    backendURL = 'https://lumin-backend.onrender.com'

}


// if (import.meta.env.PROD) {
//     backendURL = getProdBackend()
// } else {
//     backendURL = getDevBackend()
// }


export const getQuiz = createAsyncThunk(
    "general/getQuiz",
    async (data = null, thunkAPI) => {
        const {
            type, ammount, level, topic
        } = thunkAPI.getState().general
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ammount, level, topic }),
            redirect: "follow",
        }

        const response = await
            fetch(`${backendURL}/api/questions/${type}`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    return { error: null, result };
                })
                .catch((error) => {
                    console.log("error", error)
                    return { error: error }
                });


        return response

    }
)