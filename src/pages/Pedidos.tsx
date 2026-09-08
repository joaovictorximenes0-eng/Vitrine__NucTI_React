import { useState } from "react";
import CardPedido from "../components/CardPedido";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

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

  return (
    <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
      <div className="mt-1 mb-3 flex gap-2 py-4 md:my-3">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleChangeCategory("Pendente")}
        >
          Pendente
        </div>
        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleChangeCategory("Retirado")}
        >
          Retirado
        </div>
        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <CardPedido
          id={2}
          name="Odair Michael"
          date="10/07/2005"
          orderTime="12:00"
          deliveryTime="13:00"
          total={150.35}
        />
      </div>
    </div>
  );
};

export default Pedidos;
