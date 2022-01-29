import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    cartList: [],
    wishList: []
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push(action.payload);
        },
        addToWish: (state, action) => {
            state.wishList.push(action.payload);
        },
        deleteCartItem: (state, action) => {
            state.cartList.filter((item) => item.id !== action.payload.id);
        },
        deleteWishItem: (state, action) => {
            state.wishList.filter((item) => item.id !== action.payload.id);
        },
        wishToCart: (state, action) => { },
        resetCart: (state) => {
            state.cartList = [];
        },
        resetWish: (state) => {
            state.wishList = [];
        }
    },

});
export const { wishToCart, addToCart, resetCart, resetWish, addToWish, deleteWishItem, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;