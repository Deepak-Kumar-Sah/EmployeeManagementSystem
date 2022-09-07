import { configureStore } from "@reduxjs/toolkit";
import addUserReducer from './slices/signin';
import userDB from "./slices/userDB";


const store =configureStore({
    reducer:{
    //    addUser:addUserReducer,
       userDataBase:userDB
    }
})
export default store;