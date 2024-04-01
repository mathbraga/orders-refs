import * as fs from 'fs';
import * as path from 'path';
import calculatePendencyValues from './calculatePendencyValues';
import createPendencies from './createPendencies';
import { processOrders } from './orders';
import { processReferences } from './references';

export default async function processOrdersAndRefs(): Promise<string> {
  const resultFilePath = 'data/Pendentes.txt';
  const directoryName = path.join(__dirname, '..', resultFilePath);

  const orders = await processOrders();
  const orderQuantities = await processReferences(orders);

  // create list of pendency items
  const pendencies = createPendencies(orders, orderQuantities);
  const pendencyList = Object.keys(pendencies).map((id) => {
    return calculatePendencyValues(id, pendencies[id]);
  });

  // prepare data to be written in file
  const fileLines = pendencyList.map((pendency) => {
    return JSON.stringify(pendency);
  });
  const formattedData = fileLines.join('\n');

  //write result to file
  try {
    fs.writeFileSync(directoryName, formattedData);
  } catch (error) {
    throw error;
  }

  return formattedData;
}

processOrdersAndRefs();
