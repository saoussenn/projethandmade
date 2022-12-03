import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// add product
export const addProduct = createAsyncThunk(
  "product/addproduct",
  async (product) => {
    try {
      let response = await axios.post(
        "http://localhost:5000/product/addproduct",
        product
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
// get all products
export const allProduct = createAsyncThunk("product/products", async () => {
  try {
    let response = await axios.get("http://localhost:5000/product/allproducts");
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

// get  product by filter
export const searchedProduct = createAsyncThunk(
  "product/filter",
  async (text) => {
    try {
      let response = await axios.get(
        "http://localhost:5000/product/productFilter",
        text
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// update product
export const updateProduct = createAsyncThunk(
  "product/update/:id",
  async ({ id, product }) => {
    try {
      let response = await axios.put(`http://localhost:5000/product/update/${id}`, product)

      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// delete product

export const deleteProduct = createAsyncThunk(
  "product/delete/:id",
  async ({id}) => {
    try {
      let response = await axios.delete(`http://localhost:5000/product/delete/${id}`)
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);




const initialState = {
  product: null,
  status: null,
  products: [],

};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {

    // add a new product
    [addProduct.pending]: (state) => {
      state.status = "pending";
    },

    [addProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload?.result;
    },

    [addProduct.rejected]: (state, action) => {
      state.status = "fail";


    },

    // get all products
    [allProduct.pending]: (state) => {
      state.status = "pending";
    },

    [allProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload?.products;
    },

    [allProduct.rejected]: (state, action) => {
      state.status = "fail";

    },

    // get  product by filter

    [searchedProduct.pending]: (state) => {
      state.status = "pending";
    },

    [searchedProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload?.productSearched;
    },

    [searchedProduct.rejected]: (state, action) => {
      state.status = "fail";

    },

    // update product

    [updateProduct.pending]: (state) => {
      state.status = "pending";
    },

    [updateProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload?.product;
    },

    [updateProduct.rejected]: (state, action) => {
      state.status = "fail";


    },

    // delete product

    [deleteProduct.pending]: (state) => {
      state.status = "pending";
    },

    [deleteProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.product = action.payload?.product;
    },

    [deleteProduct.rejected]: (state, action) => {
      state.status = "fail";

    },








  },
});

export default productSlice.reducer;
