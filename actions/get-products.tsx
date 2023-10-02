import { Product } from "@/types";
import queryString from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (q: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: q.categoryId,
      colorId: q.colorId,
      sizeId: q.sizeId,
      isFeatured: q.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};
export default getProducts;
