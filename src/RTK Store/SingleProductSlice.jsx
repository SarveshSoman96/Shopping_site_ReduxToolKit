import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProductInfo = createAsyncThunk("fetchProductInfo", async (id) => {
    const resData = await fetch(`https://fakestoreapi.com/products/${id}`)
    console.log(`api called for product ${id}`)
    return resData.json()
});

const singleProduct = createSlice({
    name: "product",
    initialState:{
            productInfo:{},
            error: false,
            loading: false,
        },

    reducers: {
        cleanUpSingleProduct(state, action){
            state.productInfo = {}
        }
    },

    extraReducers: (builder) => {
    
        builder.addCase(fetchProductInfo.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchProductInfo.fulfilled, (state, action) => {
            // const productDataReceived = {...action.payload}
            // localStorage.setItem("productInfo", JSON.stringify(productDataReceived))
            state.productInfo = {...action.payload}
            state.loading = false
            // console.log("call is fullfilled")
        })

        builder.addCase(fetchProductInfo.rejected, (state, action) => {
            state.error = true
            state.loading = false
            // console.log("error occured", action.payload)
        })

    }

})

export default singleProduct.reducer;
export const { cleanUpSingleProduct }  = singleProduct.actions;
