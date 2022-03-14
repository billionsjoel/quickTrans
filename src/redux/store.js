import { configureStore } from '@reduxjs/toolkit';
import fakeReducer from './facade-users/fakeReducer';

const store = configureStore({ reducer: fakeReducer });

export default store;
