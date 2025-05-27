import { Product } from "./product";

export interface User {
  email: string;
  password: string;
}
export interface Usuario {
  id: string;
  correo: string;
  admin: boolean;
  carrito: string[];
}

