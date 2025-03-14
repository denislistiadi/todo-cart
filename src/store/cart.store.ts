import { create } from 'zustand';
import { IProduct } from '../types/products.types';

export interface ICartStore {
  cart: IProduct[];
  addToCart: (item: IProduct) => void;
  removeFromCart: (id: number) => void;
}

const useCart = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (item: IProduct) =>
    set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item: IProduct) => item.id !== id),
    })),
}));

export default useCart;
