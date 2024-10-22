import { useDispatch } from 'react-redux';
import { adicionarAoCarrinho } from '../redux/reducers/carrinhoSlice'
import { Produto as ProdutoType } from '../App';
import Produto from '../components/Produto';
import * as S from './styles';
import { useGetProdutosQuery } from '../services/api';

type Props = {
  produtos: ProdutoType[];
  favoritos: ProdutoType[];
  favoritar: (produto: ProdutoType) => void;
  adicionarAoCarrinho: (produto: ProdutoType) => void;
};

const ProdutosComponent = ({ favoritos, favoritar }: Props) => {
  const dispatch = useDispatch();

  const { data: produtos, isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id;
    const IdsDosFavoritos = favoritos.map((f) => f.id);

    return IdsDosFavoritos.includes(produtoId);
  };

  if (isLoading) return <h2>Carregando...</h2>

  return ( 
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={(produto) => dispatch(adicionarAoCarrinho(produto))}
          />
        ))}
      </S.Produtos>
    </>
  );
};

export default ProdutosComponent;
