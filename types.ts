export interface Billboard {
  id: string;
  label: string;
  image: string;
}
export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
  billboardId: string;
}
export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  image: Image[];
}
export interface Image {
  id: string;
  url: string;
}
export interface Color {
  id: string;
  value: string;
  name: string;
}
export interface Size {
  id: string;
  value: string;
  name: string;
}
