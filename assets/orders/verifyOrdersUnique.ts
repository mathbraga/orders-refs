import { Order } from './types';

export default function verifyOrdersUnique(orders: Order[], orderId: string) {
  const existingOrderIds = {};

  orders.forEach((order) => {
    if (existingOrderIds[order.numeroItem]) {
      throw new Error(
        `[Pedido ${orderId}] 'número_item: ${order.numeroItem}' de 'código_produto: ${order.codigoProduto}' ` +
          `já existe neste pedido.`,
      );
    }

    existingOrderIds[order.numeroItem] = 1;
  });
}
