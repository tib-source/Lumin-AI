import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "./generalActions";


const initialState = {
    topic: "Computer Science",
    generatedQuestions: {},
    type: "trueFalse",
    level: "undergrad",
    ammount: 10,
    backendUrl: "https://lumin-backend.onrender.com",
    devBackend: "http://localhost:5000",
    error: null,
    loading: false
}


export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setQuizConfig: (state, { payload }) => {
            console.log(payload)
            const { ammount, type, level, topic } = payload
            state.ammount = ammount || state.ammount
            state.type = type || state.type
            state.level = level || state.level
            state.topic = topic || state.topic

            console.log(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getQuiz.fulfilled, (state, { payload }) => {
            state.generatedQuestions = payload.result
            state.loading = false

        }).addCase(getQuiz.pending, (state) => {
            state.loading = true
        }).addCase(getQuiz.rejected, (state, action) => {
            state.error = action
            console.error(action.error.stack)
            state.loading = false
        })
    }
})

export const { setQuizConfig } = generalSlice.actions;

export default generalSlice.reducer