export interface BuyerI {
  _id: string;
  name: string;
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
  buyers?: BuyerI[];
  createdAt: string;
  items: ItemI[];
  store: string;
  updatedAt?: string;
}