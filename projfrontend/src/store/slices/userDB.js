import {createSlice,current} from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';

const userDB = createSlice({
    name: 'userDB',
    initialState:{
        usersList:[],
        isAuthenticated:false
    },
    reducers:{
        putUser:(state,action)=>{
            state.usersList.push(action.payload);
        },
        removeUser:(state,action)=>{
            state.filter((item)=>item.id !== action.payload)
        },
        auth:(state,action)=>{
            state.usersList.forEach(check);
            function check(items){
                items.forEach((item)=>{
                    if(item.email==action.payload.email && item.id==action.payload.password){
                        state.isAuthenticated=true;
                        localStorage.setItem("email",action.payload.email);
                        console.log("authenticated")
                    }
                })
            }
        },
        logoutUser:(state,action)=>{
            state.isAuthenticated=action.payload;
            localStorage.clear();
            console.log("logout");
            console.log(state.isAuthenticated);

        }
    }
})
export const {putUser,removeUser,auth,logoutUser} = userDB.actions;
export default userDB.reducer;
