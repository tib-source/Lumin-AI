import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import generalReducer from "./general/generalSlice";


export default configureStore({
    reducer: {
        auth: authReducer,
        general: generalReducer
    }
})
