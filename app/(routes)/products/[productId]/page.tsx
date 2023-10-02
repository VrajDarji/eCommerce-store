import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-product";
import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const Page: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const suggested = suggestedProducts.filter((p) => p.id !== params.productId);
  return (
    <div className="bg-white pb-10 ">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.image} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <ProductList title="Related Items" data={suggested} />
      </Container>
    </div>
  );
};
export default Page;
