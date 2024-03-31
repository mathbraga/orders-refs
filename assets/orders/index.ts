import * as fs from 'fs/promises';
import * as path from 'path';
import { Order, OrdersById, OrdersByIdObject, SourceOrder } from './types';
import getIdFromFile from '../utils/getIdFromFile';
import createValidatedObject from '../utils/createValidatedObject';
import verifyOrdersUnique from './verifyOrdersUnique';
import convertOrderDataToObject from './convertOrderDataToObject';
import verifyIdSequence from './verifyIdSequence';
import createOrderDTO from './createOrderDTO';
import validateOrderFields from './validateOrderFields';

const dataDirectory: string = 'data/pedidos';
const directoryName = path.join(__dirname, '../..', dataDirectory);

const createOrdersObject = async (): Promise<OrdersByIdObject> => {
  let ordersByIdObject: OrdersByIdObject = {};

  try {
    const files = await fs.readdir(directoryName);

    for (let file of files) {
      let filePath = path.join(directoryName, file);
      let fileData = await fs.readFile(filePath, 'utf8');

      let orders: OrdersById = {};
      let orderId = getIdFromFile(file);

      orders[orderId] = createValidatedObject<Order, SourceOrder>(
        orderId,
        fileData,
        createOrderDTO,
        validateOrderFields,
      );
      // check list of entries uniqueness before transforming to object format
      verifyOrdersUnique(orders[orderId], orderId);

      // transform to object format for id sequence check
      ordersByIdObject[orderId] = convertOrderDataToObject(orders[orderId]);
      verifyIdSequence(ordersByIdObject[orderId], orderId);
    }

    return ordersByIdObject;
  } catch (error) {
    throw error;
  }
};

export const getOrders = async () => {
  const orders = await createOrdersObject();

  console.log(orders);
};
