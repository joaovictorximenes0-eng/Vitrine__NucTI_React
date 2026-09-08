import { ShoppingCart } from "lucide-react";
import type { ProductInterface } from "../types/Product";
import { formatterPrice } from "../utils/FormatterPrice";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Product = ({
  id,
  name,
  description,
  price,
  img,
  setProducts,
}: ProductInterface) => {
  const { user } = useContext(UserContext);

  const handleDelectProduct = async (id: string) => {
    try {
      if (!id) {
        return;
      }
      const response = await fetch(
        `http://localhost:3000/remove-product/${id}`,
        { method: "DELETE" },
      );

      if (!response.ok) {
        console.log("Erro ao realizar ");
      }

      getProducts();
    } catch (error) {
      return;
    }
    return alert(id);
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

  return (
    <div className="">
      <div className="flex gap-2">
        <img
          src={`./${img}`}
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />
        <div className="flex w-full flex-col">
          {user?.admin && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-white uppercase md:text-lg">
                {name}
              </p>
              <p
                className="flex cursor-pointer items-center rounded-md border-1 px-1 text-xs text-red-500 uppercase"
                onClick={() => handleDelectProduct(id)}
              >
                Deletar
              </p>
            </div>
          )}
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            {description}
          </p>
          <div className="item-center flex justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>

            <ShoppingCart className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
