import getBillboards from "@/actions/get-billboard";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const page = async () => {
  const billBoard = await getBillboards("2e2270e7-e02b-44b3-be35-d7326c640c58");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billBoard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px=6 lg:px-8">
          <ProductList title="Featured Product" data={products} />
        </div>
      </div>
    </Container>
  );
};
export default page;
