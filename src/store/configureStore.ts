import { configureStore } from '@reduxjs/toolkit'
import main from './slices/Main';

const store = configureStore({
  reducer: { main },
  devTools: process.env.NODE_ENV !== 'production'
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;