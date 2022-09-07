import {createSlice} from '@reduxjs/toolkit';

const myAuth = createSlice({
    name: 'authUser',
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
export const {add,remove} = myAuth.actions;
export default myAuth.reducer;
