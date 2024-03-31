import { OrdersById } from './types';
import verifyOrdersUnique from './verifyOrdersUnique';

const mockId = '1';
const faultyMockOrder: OrdersById = {
  [mockId]: [
    {
      numeroItem: 1,
      codigoProduto: '1ZZ',
      quantidade: 10,
      valorUnidade: '1,00',
    },
    {
      numeroItem: 1,
      codigoProduto: '2ZZ',
      quantidade: 10,
      valorUnidade: '1,00',
    },
  ],
};
const truthfulMockOrder: OrdersById = {
  [mockId]: [
    {
      numeroItem: 1,
      codigoProduto: '1ZZ',
      quantidade: 10,
      valorUnidade: '1,00',
    },
    {
      numeroItem: 2,
      codigoProduto: '2ZZ',
      quantidade: 10,
      valorUnidade: '1,00',
    },
  ],
};

describe('verifyOrdersUnique', () => {
  it('should throw error for repetitive id in "número_item"', () => {
    const testWrapper = () => {
      verifyOrdersUnique(faultyMockOrder[mockId], mockId);
    };

    expect(testWrapper).toThrow();
  });

  it('should return undefined if all "número_item" are unique', () => {
    expect(
      verifyOrdersUnique(truthfulMockOrder[mockId], mockId),
    ).toBeUndefined();
  });
});
