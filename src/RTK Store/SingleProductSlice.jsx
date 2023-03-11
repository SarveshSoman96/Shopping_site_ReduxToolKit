import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProductInfo = createAsyncThunk("fetchProductInfo", async (id) => {
    const resData = await fetch(`https://fakestoreapi.com/products/${id}`)
    // console.log(`api called for id = ${id}`)
    return resData.json()
});

const singleProduct = createSlice({
    name: "product",
    initialState:{
            productInfo: null,
            error: false,
            loading: false,
        },
    reducers: {
        cleanUpSingleProduct(){
            state.productInfo = null
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductInfo.fulfilled, (state, action) => {
            state.loading = false
            state.productInfo = action.payload
        })
        builder.addCase(fetchProductInfo.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchProductInfo.rejected, (state, action) => {
            state.error = true
            console.log("error occured", action.payload)
        })

    }

})

export default singleProduct.reducer;
export const cleanUpSingleProduct  = singleProduct.actions;
