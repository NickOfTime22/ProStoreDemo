import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

// Sets a custom page title
export const metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      ></ProductList>
    </>
  );
};

export default Homepage;
