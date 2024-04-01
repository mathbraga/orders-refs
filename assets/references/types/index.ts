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

// key = reference id (from filename)
export type ReferencesById = {
  [key: string]: Reference[];
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
