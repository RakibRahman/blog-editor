import React from 'react';
// import { ReduxDemo } from './ReduxDemo';
import {
    persistStore,
} from 'redux-persist';
import { store } from './store';
import { Provider } from 'react-redux';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { UpdateProfile } from './UpdateProfile';
import { Counter } from './Counter';
import {Shop} from './Shop';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);
export const Index = () => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <Sidebar />
            {/* <UpdateProfile />
            <Counter /> */}
            <Shop/>
        </PersistGate>

    </Provider>;
};
