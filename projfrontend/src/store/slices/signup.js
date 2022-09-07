import {createSlice} from '@reduxjs/toolkit';

const newUsers = createSlice({
    name: 'registerUser',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            state.filter((item)=>item.id !== action.payload)
        }
    }
})
export const {add,remove} = newUsers.actions;
export default newUsers.reducer;
