import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "userCart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            state.push(action.payload)            
        },
        removeFromCart(state, action){
            return state.filter(state => state.id !== action.payload) 
        } 
    }
});

export default productSlice.reducer;
export const {addToCart, removeFromCart } = productSlice.actions;