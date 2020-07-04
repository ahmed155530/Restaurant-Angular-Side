import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFood } from '../Interfaces/IFood';
import { IFoodCategory } from '../Interfaces/IFoodCategory';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBooking } from '../Interfaces/IBooking';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories() : Observable<IFoodCategory[]>
  {
    return this.httpClient.get<IFoodCategory[]>(`${environment.API_URL}/api/Order/GetCategories`);
  }

  getAllProducts(): Observable<IFood[]>
  {
    return this.httpClient.get<IFood[]>(`${environment.API_URL}/api/Order/GetAllFoods`);
  }

  getFoodsByCategoryId(id: number) : Observable<IFood[]>
  {
    console.log(id);
    return this.httpClient.get<IFood[]>(`${environment.API_URL}/api/Order/GetFoods/${id}`);

  }
  sendBooking(list) {
    var booking: IBooking;
    booking.CheckInTime = JSON.parse(localStorage.getItem('CheckInTime'));
    booking.ReservedDate = JSON.parse(localStorage.getItem('ReservedDate'));
    booking.NOofGuests = JSON.parse(localStorage.getItem('NOofGuests'));
    var data = { booking: booking, food_Orders: list }
  }

}
