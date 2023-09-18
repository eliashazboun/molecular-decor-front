import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import CategoryList from "@/components/category-list";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ee0910f4-f777-4b41-b4f7-9d5d295378c3");
  const categories = await getCategories()
  return (
    <Container>
      <div className="space-y-10 pb-5 ">
        <Billboard data={billboard} home />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CategoryList title="Categories" items={categories}/>
        </div>

      </div>
    </Container>
  );
};

export default HomePage;
