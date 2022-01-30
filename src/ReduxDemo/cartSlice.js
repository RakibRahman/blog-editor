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
            // state.cartList.push(action.payload);
            const isNewItem = state.cartList.find((item, i) => item.id === action.payload.id);
            if (isNewItem) {
                state.cartList = state.cartList.map((item, i) => item.id === action.payload.id ? { ...isNewItem, qty: isNewItem.qty + 1 } : item);
            
            } else {
                state.cartList = [...state.cartList, { ...action.payload, qty: 1 }]
            }

            // console.log(action.payload.id);
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