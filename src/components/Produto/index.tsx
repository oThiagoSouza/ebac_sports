import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  let favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const estaNosFavoritos = () => {
    favoritos = favoritos.filter((f: ProdutoType) => f.id === produto.id)

    return favoritos.includes(produto)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {estaNosFavoritos()
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
