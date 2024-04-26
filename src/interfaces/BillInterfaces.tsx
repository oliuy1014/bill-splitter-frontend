export interface BuyerI {
  name: string;
  total: number;
}

export interface ItemI {
  _id: string;
  buyers?: BuyerI[];
  name: string;
  price: number;
  quantity: number;
}

export interface BillI {
  _id: string;
  buyers?: string[];
  createdAt: string;
  items: ItemI[];
  store: string;
  updatedAt?: string;
}