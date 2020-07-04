import { IFoodOrder } from './IFoodOrder';

export interface IReceipt {
  customerName?: string,
  reservedDate?: string ,
  checkInTime?: number ,
  checkOutTime?: number ,
  tableNO?: number ,
  nOofPersons?: number ,
  foodOrders?: IFoodOrder[] ,
  totalBookingPrice?:number,

}
