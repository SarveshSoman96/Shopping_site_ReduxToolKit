import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllProduct = createAsyncThunk("fetchProducts", async() => {
    const allProducts = await fetch("https://fakestoreapi.com/products/")
    // console.log("api called for products")
    return allProducts.json();
});

const productSlice = createSlice({
  name: "userCart",
  initialState: { products: [], cart: [] },
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.cart.filter((state) => state.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
export const {addToCart, removeFromCart } = productSlice.actions;