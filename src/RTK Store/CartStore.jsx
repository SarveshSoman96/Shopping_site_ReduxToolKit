import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./CartSlice";
import SingleProductSlice from "./SingleProductSlice";

const userStore = configureStore({
    reducer: {
        cart: productSlice,
        product: SingleProductSlice
    }
})

export default userStore;