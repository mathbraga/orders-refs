import { OrdersByIdObject } from 'assets/orders/types';
import { Reference } from './types';

export default function verifyOrderExistance(
  orders: OrdersByIdObject,
  reference: Reference[],
  refId: string,
) {
  reference.forEach((ref) => {
    const orderId = ref.idPedido;
    const refItem = ref.numeroItem;

    if (!orders[orderId] || !orders[orderId][refItem]) {
      throw new Error(
        `[Nota ${refId}] O par ('id_pedido: ${orderId}' e 'número_item: ${ref.numeroItem}') não consta na lista de pedidos.`,
      );
    }
  });
}
