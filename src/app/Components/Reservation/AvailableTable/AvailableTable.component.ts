import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { ITable } from 'src/app/Interfaces/ITable';
import { Subscription } from 'rxjs';
import { IBooking } from 'src/app/Interfaces/IBooking';

@Component({
  selector: 'app-AvailableTable',
  templateUrl: './AvailableTable.component.html',
  styleUrls: ['./AvailableTable.component.css']
})
export class AvailableTableComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  seatList: number[] = [];
  booking: IBooking;
  AvailableTable :ITable ;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private reservation: ReservationService, private AvailableSeats: ReservationService)
  {
    this.booking = { id: 0, ReservedDate: new Date(), CheckInTime: 0, NOofGuests: 0 , table_Id:0  , customer_Id:""};
  }

  ngOnInit()
  {
    this.subscriptions.push(this.reservation.getAvailableSeats().subscribe(response => {
      this.seatList = response;
      console.log(response);
    },
      (err) => {
        console.log(err);
      }));
  }
  getAvailableTable()
  {
    return this.reservation.getAvailableTable(this.booking);
  }
}
