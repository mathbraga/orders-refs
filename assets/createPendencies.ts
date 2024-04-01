import { OrdersByIdObject } from './orders/types';
import { OrderQuantitiesById } from './references/types';
import decimalStringToNumber from './utils/decimalStringToNumber';

type Pendencies = {
  [key: string]: {
    pendencyList: {
      [key: string]: number;
    };
    orderTotalValue: number;
    balanceValue: number;
  };
};

export default function createPendencies(
  orders: OrdersByIdObject,
  orderQuantities: OrderQuantitiesById,
): Pendencies {
  const pendencies = {};
  const ordersId = Object.keys(orderQuantities);

  ordersId.forEach((id) => {
    let totalValue = 0;
    let balanceValue = 0;

    for (let itemId in orders[id]) {
      const orderItemTotalQuantity = orders[id][itemId].quantidade;
      const referencesItemTotalQuantity = orderQuantities[id][itemId]
        ? orderQuantities[id][itemId]
        : 0;

      totalValue +=
        orderItemTotalQuantity *
        decimalStringToNumber(orders[id][itemId].valorUnidade);

      if (orderItemTotalQuantity > referencesItemTotalQuantity) {
        const balanceQuantity =
          orderItemTotalQuantity - referencesItemTotalQuantity;

        if (!pendencies[id]) {
          pendencies[id] = {
            pendencyList: {},
          };
        }

        pendencies[id] = {
          pendencyList: {
            ...pendencies[id].pendencyList,
            [itemId]: balanceQuantity,
          },
        };

        balanceValue +=
          balanceQuantity *
          decimalStringToNumber(orders[id][itemId].valorUnidade);
      }
    }

    if (pendencies[id]) {
      pendencies[id].orderTotalValue = totalValue;
      pendencies[id].balanceValue = balanceValue;
    }
  });

  return pendencies;
}
