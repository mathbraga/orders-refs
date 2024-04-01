export type SourceReference = {
  id_pedido: string;
  número_item: number;
  quantidade_produto: number;
};

export type Reference = {
  idPedido: string;
  numeroItem: number;
  quantidade: number;
};

export type ReferencesById = {
  [key: string]: Reference[];
};

// numeroItem is used as key
export type QuantityByOrderId = {
  [key: string]: Pick<Reference, 'quantidade'>;
};

// idPedido is used as key
export type ReferenceEntryById = {
  [key: string]: QuantityByOrderId;
};

// reference id from file name is used as key
export type ReferencesByIdObject = {
  [key: string]: ReferenceEntryById;
};

/**
 * {
 *  id_pedido: {
 *    número_item: quantidade_produto
 *  }
 * }
 */
export type OrderQuantitiesById = {
  [key: string]: {
    [key: string]: number;
  };
};
