import * as fs from 'fs/promises';
import * as path from 'path';
import getIdFromFile from '../utils/getIdFromFile';
import createValidatedObject from '../utils/createValidatedObject';
import {
  OrderQuantitiesById,
  Reference,
  ReferencesById,
  SourceReference,
} from './types';
import createReferenceDTO from './createReferenceDTO';
import validateReferenceFields from './validateReferenceFields';
import { OrdersByIdObject } from '../orders/types';
import verifyOrderExistance from './verifyOrderExistance';
import getOrderQuantitiesById from './getOrderQuantitiesById';
import verifyReferencesQuantity from './verifyReferencesQuantity';

const dataDirectory: string = 'data/notas';
const directoryName = path.join(__dirname, '../..', dataDirectory);

const createReferencesObject = async (
  orders: OrdersByIdObject,
): Promise<OrderQuantitiesById> => {
  try {
    const files = await fs.readdir(directoryName);
    let referencesById: ReferencesById = {};

    for (let file of files) {
      const filePath = path.join(directoryName, file);
      const fileData = await fs.readFile(filePath, 'utf8');

      let references = {};
      const refId = getIdFromFile(file);

      references[refId] = createValidatedObject<Reference, SourceReference>(
        refId,
        fileData,
        createReferenceDTO,
        validateReferenceFields,
      );
      verifyOrderExistance(orders, references[refId], refId);

      referencesById = { ...referencesById, ...references };
    }

    const orderQuantitiesById = getOrderQuantitiesById(referencesById);
    verifyReferencesQuantity(orderQuantitiesById, orders);

    return orderQuantitiesById;
  } catch (error) {
    throw error;
  }
};

export const processReferences = async (orders: OrdersByIdObject) => {
  const references = await createReferencesObject(orders);

  return references;
};
