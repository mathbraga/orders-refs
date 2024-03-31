import { Order, OrderEntryById } from './types';

export default function convertOrderDataToObject(
  order: Order[],
): OrderEntryById {
  const orderEntryById: OrderEntryById = {};

  order.forEach((entry) => {
    const { numeroItem, ...otherProps } = entry;
    orderEntryById[numeroItem] = { ...otherProps };
  });

  return orderEntryById;
}
