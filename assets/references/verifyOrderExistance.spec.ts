import { OrdersByIdObject } from 'assets/orders/types';
import { Reference } from './types';
import verifyOrderExistance from './verifyOrderExistance';

const mockValue1: Reference[] = [
  {
    idPedido: '1',
    numeroItem: 1,
    quantidade: 5,
  },
];

const mockValue2: OrdersByIdObject = {
  '1': {
    '2': {
      codigoProduto: 'AAA',
      quantidade: 5,
      valorUnidade: '5,00',
    },
  },
};

describe('verifyOrderExistance', () => {
  it('should throw error if order is not found"', () => {
    const testWrapper = () => {
      verifyOrderExistance(mockValue2, mockValue1, '1');
    };

    expect(testWrapper).toThrow();
  });
});
