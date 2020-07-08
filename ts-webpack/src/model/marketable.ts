export default interface Marketable {
  name: string;
  price: number;
  discount: number;
  priceWithDiscount(): number;
}
