import { SourceReference, Reference } from './types';

export default function createReferenceDTO(
  reference: SourceReference,
): Reference {
  return {
    idPedido: reference['id_pedido'].toString(),
    numeroItem: reference['número_item'],
    quantidade: reference['quantidade_produto'],
  };
}
