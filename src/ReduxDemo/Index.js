import React from 'react';
// import { ReduxDemo } from './ReduxDemo';

import { store } from './store';
import { Provider } from 'react-redux';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { UpdateProfile } from './UpdateProfile';
import { Counter } from './Counter';

export const Index = () => {
    return <Provider store={store}>
        <Navbar />
        <Sidebar />
        <UpdateProfile />
        <Counter />

    </Provider>;
};
