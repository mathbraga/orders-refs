import * as fs from 'fs/promises';
import * as path from 'path';
import getIdFromFile from '../utils/getIdFromFile';
import createValidatedObject from '../utils/createValidatedObject';
import { Reference, SourceReference } from './types';
import createReferenceDTO from './createReferenceDTO';
import validateReferenceFields from './validateReferenceFields';

const dataDirectory: string = 'data/notas';
const directoryName = path.join(__dirname, '../..', dataDirectory);

const createReferencesObject = async () => {
  try {
    const files = await fs.readdir(directoryName);

    for (let file of files) {
      let filePath = path.join(directoryName, file);
      let fileData = await fs.readFile(filePath, 'utf8');

      let references = {};
      let refId = getIdFromFile(file);

      references[refId] = createValidatedObject<Reference, SourceReference>(
        refId,
        fileData,
        createReferenceDTO,
        validateReferenceFields,
      );
      console.log(references);

      //   orders[orderId] = createValidatedObject(orderId, fileData);
      //   // check list of entries uniqueness before transforming to object format
      //   verifyOrdersUnique(orders[orderId], orderId);

      //   // transform to object format for id sequence check
      //   ordersByIdObject[orderId] = convertOrderDataToObject(orders[orderId]);
      //   verifyIdSequence(ordersByIdObject[orderId], orderId);
    }
  } catch (error) {
    throw error;
  }
};

createReferencesObject();
