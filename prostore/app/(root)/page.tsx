import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

// Sets a custom page title
export const metadata = {
  title: "Home",
};

const Homepage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      ></ProductList>
    </>
  );
};

export default Homepage;
