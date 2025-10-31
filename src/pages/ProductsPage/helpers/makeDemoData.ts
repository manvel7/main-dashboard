export type Product = {
  id: string;
  name: string;
};

// Demo data
export function makeDemoData(cats = 6, productsPer = 15): Category[] {
  return Array.from({ length: cats }).map((_, ci) => ({
    id: String(ci + 1),
    name: `Category ${ci + 1}`,
    products: Array.from({ length: productsPer }).map((_, pi) => ({
      id: `${ci + 1}-${pi + 1}`,
      name: `Product ${ci + 1}-${pi + 1}`,
    })),
  }));
}
