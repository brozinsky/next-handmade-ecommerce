export function getTotalQuantity(items: any[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}
