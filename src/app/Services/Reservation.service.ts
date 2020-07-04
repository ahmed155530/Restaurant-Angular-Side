import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBooking } from '../Interfaces/IBooking';
import { IPayment } from '../Interfaces/IPayment';
import { ITable } from '../Interfaces/ITable';
import { ActivatedRoute, Router } from '@angular/router';
import { IFoodOrder } from '../Interfaces/IFoodOrder';
import { IReceipt } from '../Interfaces/IReceipt';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private subscriptions: Subscription[] = [];
  AvailableTable: ITable;
  booking : IBooking;
  bookingTable : IBooking;
  reserving : IBooking ;
  receiptDetails:IReceipt;
  constructor(private activeRoute: ActivatedRoute, private router: Router,private httpClient : HttpClient , ) { }


  getAvailableSeats():Observable<number[]>//get the dropdown list of tables' types
  {
    return this.httpClient.get<number[]>(`${environment.API_URL}/api/Bookings/BookingSearchOptions`);
  }

  BookTable(bookingTable : IBooking)//book table only
  {
    bookingTable.customer_Id = localStorage.getItem('Customer_Id');
    return this.httpClient.post(`${environment.API_URL}/api/Bookings/reserveTable`, bookingTable).subscribe(res =>
      {
        console.log(res);
        this.receiptDetails = res ;
      this.router.navigateByUrl("/TableReceipt");
      },
      error =>
      {
        console.log(error);
      });
  }

  getAvailableTable(booking : IBooking)//show the suitable table
  {
    localStorage.setItem('booking', JSON.stringify(booking));
    JSON.stringify(localStorage.setItem('ReservedDate', booking.ReservedDate.toString()));
    JSON.stringify(localStorage.setItem("CheckInTime", booking.CheckInTime.toString()));
    JSON.stringify(localStorage.setItem("NOofGuests", booking.NOofGuests.toString()));
    this.httpClient.post(`${environment.API_URL}/api/Bookings/getAvailableTable` , booking).subscribe(response =>
    {
      console.log(response);
      this.AvailableTable =response;
      booking.table_Id = this.AvailableTable.id;
      booking.customer_Id = localStorage.getItem('Customer_Id');
      localStorage.setItem('booking', JSON.stringify(booking));
      localStorage.setItem('Table_Id', JSON.stringify(this.AvailableTable.id));
      this.router.navigateByUrl('/showTable');
    },
    error =>
    {
      console.log(error);
    });
  }


  sendBooking(list:any) //book table with order
  {
    this.reserving = JSON.parse(localStorage.getItem('booking'));
    //this.reserving.customer_Id = JSON.parse(localStorage.getItem('Customer_Id'));
    localStorage.setItem('booking', JSON.stringify(this.reserving));
    var data = { booking: this.reserving, food_Orders : list} ;
    console.log(data);
    console.log(this.reserving);

    this.httpClient.post(`${environment.API_URL}/api/Bookings/bookTableWithOrder`, data).subscribe(response =>
    {
      console.log(response);
      this.receiptDetails = response;
      // localStorage.removeItem('booking');
      // localStorage.removeItem('ReservedDate');
      // localStorage.removeItem('CheckInTime');
      // localStorage.removeItem('NOofGuests');

      this.router.navigateByUrl('/receipt');
    },
    error =>
    {
      console.log(error);
    });
  }

  payMoney(paying : IPayment)
  {
    return this.httpClient.post(`${environment.API_URL}/api/Payment/charge`, paying)
  }

  showReceipt()
  {

  }
}
