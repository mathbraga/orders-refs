import { Reference } from './types';
import { isPositiveInteger, isAlphaNumeric } from '../utils/validators';

export default function validateReferenceFields(
  referenceId: string,
  reference: Reference,
) {
  const { idPedido, numeroItem, quantidade } = reference;

  if (!isAlphaNumeric(idPedido)) {
    throw new Error(
      `[Nota ${referenceId}] 'id_pedido: ${idPedido}' não é um valor alfanumérico.`,
    );
  }
  if (!isPositiveInteger(numeroItem)) {
    throw new Error(
      `[Nota ${referenceId}] 'número_item: ${numeroItem}' não é um valor inteiro e/ou positivo.`,
    );
  }
  if (!isPositiveInteger(quantidade)) {
    throw new Error(
      `[Nota ${referenceId}] 'quantidade_produto: ${quantidade}' de 'número_item: ${numeroItem}' ` +
        `não é um valor inteiro e/ou positivo.`,
    );
  }
}
