import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice({
    name:"appConfig",
    initialState:{
        language:"en"
    },
    reducers:{
        setLanguage:(state,action)=>{
            state.language=action.payload
        }
    }
})

export const {setLanguage}=configSlice.actions;

export default configSlice.reducer;