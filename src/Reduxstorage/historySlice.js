import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    battleList : []
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers:{
        addBattle:(state,action)=>{
           
            state.battleList.push(action.payload)

        }
    }
})


export const {addBattle} = historySlice.actions
export default historySlice.reducer;