export function getTotalQuantity(items: any[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

function stringToSlug(string: string) {
  return string.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}