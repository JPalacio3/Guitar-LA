/* Para definir los tipos de datos dentro de un objeto / arreglo, se puede
declarar por medio de types o interfaces
*/

import Guitar from '../components/Guitar';
import { CartActions } from '../reducers/cart-reducers';

// uso de interface
export interface Guitar {
	id: number;
	name: string;
	image: string;
	description: string;
	price: number;
}

// uso de type
/*type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
*/

// Aplicación de herencia usando Interface:
export interface CartItem extends Guitar {
	quantity: number;
}

/*
Aplicación de herencia usando types:
export type CartItem = Guitar & {
  quantity: number;
}

Aplicación de herencia usando Utility Types: Solamente funcionan con los Types:

  <Pick> : Permite HEREDAR solamente algunos atributos y agregar otros nuevos:
export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
  quantity : number;
}

<Omit> : Permite OMITIR algunos atributos, HEREDAR los demás y agregar otros nuevos:
export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
  quantity : number;
}
*/

export type GuitarID = Guitar['id'];

export interface GuitarProps {
	guitar: Guitar;
	dispatch: React.Dispatch<CartActions>;
}

export type HeaderProps = {
	cart: CartItem[];
	dispatch: React.Dispatch<CartActions>;
	decreaseQuantity: (id: Guitar['id']) => void;
	increaseQuantity: (id: Guitar['id']) => void;
	clearCart: () => void;
};
