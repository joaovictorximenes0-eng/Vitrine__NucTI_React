export interface ProductInterface {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number;
  category: string;
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}

/* export type UserContextType = {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}; */
