import { Product } from "@/types";
import NoResult from "./ui/NoResult";
import ProductCard from "./ui/ProductCard";
interface ProductProps {
  data: Product[];
  title: string;
}

const ProductList: React.FC<ProductProps> = ({ data, title }) => {
  console;
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
