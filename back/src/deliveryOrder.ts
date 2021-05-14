import {OrderItem} from './orderItem'

enum Status {
    checking,
    inProgress,
    finished
}
class DeliveryOrder {
    private id: number
    private status: Status;
    private orderTime: Date;
    private quantity: number;
    private price: number;
    private weight: number;
    private deliveryAddress: string;
    private idSupplier: number;
    private orderItem: Array<string>;

    constructor(id:number,
      status: Status,
      quantity: number,
      price: number,
      weight: number,
      deliveryAddress: string,
      idSupplier: number) {
      this.id = id;
      this.quantity = quantity;
      this.price = price;
      this.weight = weight;
      this.deliveryAddress = deliveryAddress;
      this.idSupplier = idSupplier;
    }
}
