import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllProduct = createAsyncThunk("fetchProducts", async() => {
    const allProducts = await fetch("https://fakestoreapi.com/products/")
    // console.log("api called for products")
    return allProducts.json();
});

const productSlice = createSlice({
  name: "userCart",
  initialState: {
    allProducts: [],
    cart: [],
    totalQty: 0,
    cartTotal: 0,
    error: false,
    loading: true,
  },
  reducers: {
    addToCart(state, action) {
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.cart[productIndex].productQty += 1;
      } else {
        const tempProduct = { ...action.payload, productQty: 1 };
        state.cart.push(tempProduct);
      }

      // localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const removeItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      state.cart = removeItems;
      // localStorage.setItem("cart", JSON.stringify(state.cart))
    },

    decreaseItemQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].productQty > 1) {
        state.cart[itemIndex].productQty -= 1;
      } else if (state.cart[itemIndex].productQty === 1) {
        const cartItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = cartItems;
      }

      // localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    getCartTotal(state, action) {
      const { cartTotalPrice, cartQty } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, productQty } = item;
          const itemTotal = price * productQty;

          cartTotal.cartTotalPrice += itemTotal;
          cartTotal.cartQty += productQty;

          return cartTotal;
        },
        {
          cartTotalPrice: 0,
          cartQty: 0,
        }
      );

      state.totalQty = cartQty;
      state.cartTotal = cartTotalPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      // localStorage.setItem("products", JSON.stringify(action.payload));
      state.allProducts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default productSlice.reducer;
export const {addToCart, removeFromCart, decreaseItemQuantity , getCartTotal, clearCart} = productSlice.actions;