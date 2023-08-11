import { configureStore } from '@reduxjs/toolkit'
import CarrinhoReducer from './reducers/carrinho'
import FavoritosReducer from './reducers/favoritos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer,
    favoritos: FavoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
