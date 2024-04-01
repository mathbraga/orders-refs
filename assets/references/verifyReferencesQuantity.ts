import { OrdersByIdObject } from '../orders/types';
import { OrderQuantitiesById } from './types';

export default function verifyReferencesQuantity(
  orderQuantities: OrderQuantitiesById,
  orders: OrdersByIdObject,
) {
  const ordersId = Object.keys(orderQuantities);

  ordersId.forEach((id) => {
    for (let itemId in orderQuantities[id]) {
      const orderItemTotalQuantity = orders[id][itemId].quantidade;
      const referencesItemTotalQuantity = orderQuantities[id][itemId];

      if (referencesItemTotalQuantity > orderItemTotalQuantity) {
        throw new Error(
          `[Pedido ${id}] A quantidade para 'número_item: ${itemId}' nas notas (${referencesItemTotalQuantity}) ` +
            `ultrapassa o total (${orderItemTotalQuantity}) que consta no pedido.`,
        );
      }
    }
  });
}
