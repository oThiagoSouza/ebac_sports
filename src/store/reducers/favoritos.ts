import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const FavoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const IdsDosFavoritos = state.itens.map((f) => f.id)
      const estaNosFavoritos = IdsDosFavoritos.includes(produto.id)

      if (estaNosFavoritos) {
        state.itens = state.itens.filter((f) => f.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = FavoritosSlice.actions
export default FavoritosSlice.reducer
