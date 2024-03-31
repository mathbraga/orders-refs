import { OrderEntryById } from './types';

export default function verifyIdSequence(
  orders: OrderEntryById,
  orderId: string,
) {
  const numberOfOrders = Object.entries(orders).length;

  for (let i = 1; i <= numberOfOrders; i++) {
    if (!orders[i]) {
      throw new Error(
        `[Pedido ${orderId}] 'número_item: ${i}' não foi encontrado no pedido.`,
      );
    }
  }
}
