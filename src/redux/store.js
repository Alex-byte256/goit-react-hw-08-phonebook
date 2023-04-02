import {  configureStore } from '@reduxjs/toolkit'
import {mySlice} from './reducers';
import { authReducer } from './auth';
import {
  persistStore,
  persistReducer
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    contacts :mySlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
})

export const persistor = persistStore(store);
