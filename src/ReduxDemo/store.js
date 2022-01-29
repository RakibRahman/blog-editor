import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);

const persistedUserReducer = persistReducer(persistConfig, userReducer)

const persistedShopReducer = persistReducer(persistConfig, cartReducer)

// persist data
export const store = configureStore({
    reducer: {
        counter: persistedCounterReducer,
        user: persistedUserReducer,
        cart: persistedShopReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});


// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         user: userReducer,
//     },

// }); //creates a Redux store