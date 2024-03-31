import { SourceOrder, Order } from './types';

export default function createOrderDTO(order: SourceOrder): Order {
  return {
    numeroItem: order['número_item'],
    codigoProduto: order['código_produto'],
    quantidade: order['quantidade_produto'],
    valorUnidade: order['valor_unitário_produto'],
  };
}
