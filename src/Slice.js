import {createSlice} from "@reduxjs/toolkit"

export const userSlice=createSlice({
    name: 'user',
    initialState: {
        details:null
    },
    reducers:{
        login:(state,actions)=>{
            state.details=actions.payload;
        },
        signup:(state,actions)=>{
            state.details=actions.payload;
        }
    }
})

export const {login, signup} = userSlice.actions
export default userSlice.reducer;
// export const selectUser=state => state.user.user;