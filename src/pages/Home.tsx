import { useEffect, useState } from "react";
import Product from "../components/Product";
import type { ProductInterface } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: String) => {
    const elementoSelecionado =
      "md:text-md border-[#F2DAAC]flex flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-10 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md border-[#F2DAAC]flex flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-10 md:w-32";
    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });
  return (
    <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 py-4 md:my-3">
        <div
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hamburguer
        </div>
        <div
          className={getCategoryClass("Bebida")}
          onClick={() => handleChangeCategory("Bebida")}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass("Porção")}
          onClick={() => handleChangeCategory("Porção")}
        >
          Porções
        </div>
      </div>
      <p className="mt-2 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-1 md:gap-3">
        {filteredProducts.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
            key={product.id}
            category={product.category}
            setProducts={setProducts}
          />
        ))}
        {filteredProducts.length === 0 && <p>Não há produtos dessa categoria</p>}
      </div>
    </div>
  );
};

export default Home;
