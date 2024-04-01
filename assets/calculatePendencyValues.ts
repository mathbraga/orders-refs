type PendingItemsList = {
  número_item: string;
  saldo_quantidade: number;
};

type PendingItems = {
  id_pedido: string;
  valor_total_pedido: number;
  saldo_total_pedido: number;
  itens_pendentes: PendingItemsList[];
};

export default function calculatePendencyValues(
  orderId: string,
  pendencyItems: any,
): PendingItems {
  const { orderTotalValue, balanceValue, pendencyList } = pendencyItems;

  const itensPendentes = Object.keys(pendencyList).map((item) => ({
    número_item: item,
    saldo_quantidade: pendencyList[item],
  }));

  return {
    id_pedido: orderId,
    valor_total_pedido: orderTotalValue,
    saldo_total_pedido: balanceValue,
    itens_pendentes: itensPendentes,
  };
}
