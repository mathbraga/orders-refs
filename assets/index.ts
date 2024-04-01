import { processOrders } from './orders';
import { processReferences } from './references';

const processOrdersAndRefs = async () => {
  const orders = await processOrders();
  const references = await processReferences(orders);

  console.log(references);
};

processOrdersAndRefs();
