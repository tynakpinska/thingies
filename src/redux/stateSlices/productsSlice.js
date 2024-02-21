import { createSlice } from '@reduxjs/toolkit'


let fetchedProducts = ['product1', 'product2'];

const initialState = { products: [] }

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state) {
            state = fetchedProducts;
        }

    },
})

export const { fetchProducts } = productsSlice.actions
export default productsSlice.reducer