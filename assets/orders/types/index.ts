export type SourceOrder = {
  número_item: number;
  código_produto: string;
  quantidade_produto: number;
  valor_unitário_produto: string;
};

export type Order = {
  numeroItem: number;
  codigoProduto: string;
  quantidade: number;
  valorUnidade: string;
};

export type OrdersById = {
  [key: string]: Order[];
};

// numeroItem is to be used as key
export type OrderEntryById = {
  [key: string]: Omit<Order, 'numeroItem'>;
};

// order id from file name is used as key
export type OrdersByIdObject = {
  [key: string]: OrderEntryById;
};
