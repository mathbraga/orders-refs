import { OrderQuantitiesById, ReferencesById } from './types';

export default function getOrderQuantitiesById(
  references: ReferencesById,
): OrderQuantitiesById {
  const orderQuantitiesById = {};
  const refId = Object.keys(references);

  refId.forEach((id) => {
    for (let reference of references[id]) {
      const { idPedido, numeroItem, quantidade } = reference;

      if (!orderQuantitiesById[idPedido]) {
        orderQuantitiesById[idPedido] = {};
      }

      if (!orderQuantitiesById[idPedido][numeroItem]) {
        orderQuantitiesById[idPedido][numeroItem] = 0;
      }

      orderQuantitiesById[idPedido][numeroItem] += quantidade;
    }
  });

  return orderQuantitiesById;
}
