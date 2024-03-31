import { Order } from './types';
import {
  isPositiveInteger,
  isAlphaNumeric,
  isPositiveTwoDecimal,
} from '../utils/validators';

export default function validateOrderFields(orderId: string, order: Order) {
  const { numeroItem, codigoProduto, quantidade, valorUnidade } = order;

  if (!isPositiveInteger(numeroItem)) {
    throw new Error(
      `[Pedido ${orderId}] 'número_item: ${numeroItem}' não é um valor inteiro e/ou positivo.`,
    );
  }
  if (!isAlphaNumeric(codigoProduto)) {
    throw new Error(
      `[Pedido ${orderId}] 'código_produto: ${codigoProduto}' não é um valor alfanumérico.`,
    );
  }
  if (!isPositiveInteger(quantidade)) {
    throw new Error(
      `[Pedido ${orderId}] 'quantidade_produto: ${quantidade}' de 'código_produto: ${codigoProduto}' ` +
        `não é um valor inteiro e/ou positivo.`,
    );
  }
  if (!isPositiveTwoDecimal(valorUnidade)) {
    throw new Error(
      `[Pedido ${orderId}] 'valor_unitário_produto: ${valorUnidade}' de 'código_produto: ${codigoProduto}' ` +
        `não é um decimal positivo e/ou com até duas casas decimais.`,
    );
  }
}
