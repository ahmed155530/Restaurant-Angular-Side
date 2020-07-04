import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { IPayment } from 'src/app/Interfaces/IPayment';

@Component({
  selector: 'app-Booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.css']
})
export class BookingComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  seatList : number[] = [] ;
  seats : number[] = [] ;
  booking: IBooking ;
  paying : IPayment;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private reservation: ReservationService, private AvailableSeats : ReservationService)
  {
    this.booking = { id: 0, ReservedDate: new Date(), CheckInTime: 0, NOofGuests : 0};
    this.paying = { stripeEmail : "" , stripeToken : ""};
  }

  ngOnInit()
  {
    this.subscriptions.push(this.reservation.getAvailableSeats().subscribe( response =>
    {
      this.seatList  = response;
      console.log(response);
    },
    (err) =>
    {
      console.log(err);
    }));
  }


  book()
  {
    return this.reservation.BookTable(this.booking);
  }

  pay()
  {
    this.reservation.payMoney(this.paying).subscribe( response =>
      {
        console.log(response);
        error =>
        {
          console.log(error);
        }
      });
  }




  ngOnDestroy(): void
  {
    for (const subscription of this.subscriptions)
    {
      subscription.unsubscribe();
    }
  }

}
