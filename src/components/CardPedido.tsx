import { CalendarFold, User, Watch } from "lucide-react";

type CardPedidoType = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  deliveryTime?: string;
  total: number;
};

const CardPedido = ({
  id,
  name,
  date,
  orderTime,
  deliveryTime,
  total,
}: CardPedidoType) => {
  return (
    <div className="rounded-md bg-[#F2DAAC] p-2 text-[#161410]">
      <div className="flex justify-between">
        <p className="font-bold">#{id}</p>
        <select name="" id="" className="font-bold">
          <option value="" defaultChecked disabled>
            Pendente
          </option>
          <option value="">Retirado</option>
          <option value="">Cancelado</option>
        </select>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <User size={16} />
          <p className="text-xs">{name}</p>
        </div>

        <div className="flex items-center gap-2">
          <CalendarFold size={16} />
          <p className="text-xs">{date}</p>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Watch size={16} />
            <p className="text-xs">{orderTime}</p>
          </div>
          <div className="flex items-center gap-2">
            <Watch size={16} />
            <p className="text-xs">{deliveryTime ? deliveryTime : "--"}</p>
          </div>
        </div>

        <div className="mt-1 h-[2px] w-full bg-[#32343E]" />
        <p className="text-right font-bold text-[#32343E]">R${total}</p>
      </div>
    </div>
  );
};

export default CardPedido;
