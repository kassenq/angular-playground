export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number;
  customerSince: any;
} // a customer can only have these 5 properties

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
