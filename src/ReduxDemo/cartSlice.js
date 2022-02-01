import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartList: [],
    wishList: []
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { item, type } = action.payload;
            if (type === 'cart') {
                state.cartList.push(item);
            }
            if (type === 'wishList') {
                state.wishList.push(item);
            }
        },
        deleteItem: (state, action) => {
            const { itemKey, index } = action.payload;
            if (itemKey === 'cart') {
                
                // state.cartList.filter((item) => item.id !== id);
                state.cartList.splice(index, 1);
            }
            if (itemKey === 'wishList') {
                state.wishList.splice(index, 1);

                // state.wishList.filter((item) => item.id !== id);
            }
            
        },
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
export const { addItem, wishToCart, addToCart, resetCart, resetWish, addToWish, deleteWishItem, deleteCartItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;