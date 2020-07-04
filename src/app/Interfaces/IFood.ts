import { IReview } from './IReview';

export interface IFood {
  id? : number,
  name? : string ,
  price? : number ,
  stock?:number ,
  neededQuantity? : number ,
  foodCategory_Id? : number ,
  reviews? : IReview[],

}
