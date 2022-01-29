import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    profile: {
        name: 'Rakib',
        email: 'rakib@gmail.com',
        password: 'password'
    },
    profiles: [{
        name: 'Rakib',
        email: 'rakib@gmail.com',
        password: 'password'
    }]
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            state.profile = { ...state.profile, ...action.payload }
            // state.name = action.payload.name;
            // state.email = action.payload.email;
            // state.name = action.payload.name;
            // state.email = action.payload.email;
            // state = action.payload
        },
        addToList: (state, action) => {
            // console.log(state.profiles);
            const newItem = action.payload
            const array = [...state.profiles, newItem]
            state.profiles = array
        },
        deleteItem: (state, action) => {
            const newArray = state.profiles.filter((item, i) => i !== action.payload);
            state.profiles = newArray;
        },


    },



})
export const { update, addToList, deleteItem } = userSlice.actions;
export default userSlice.reducer; 