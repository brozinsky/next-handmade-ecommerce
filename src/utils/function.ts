export function getTotalQuantity(items: any[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function stringToSlug(string: string) {
  return string
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function transformShippingOptions(originalArray: any) {
  return originalArray.map((item: any) => ({
    value: item.name,
    title: item.name + " - " + item.price + " zł",
    id: item.slug,
    price: item.price,
  }));
}

export function calculateTotalCost(items: any[], shippingCost: number) {
  const itemsTotal = items.reduce((total, item) => {
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    const price = typeof item.price === "number" ? item.price : 0;

    return total + quantity * price;
  }, 0);

  return itemsTotal + shippingCost;
}
