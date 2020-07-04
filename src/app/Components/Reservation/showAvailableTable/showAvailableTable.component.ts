import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { Subscription } from 'rxjs';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { ITable } from 'src/app/Interfaces/ITable';

@Component({
  selector: 'app-showAvailableTable',
  templateUrl: './showAvailableTable.component.html',
  styleUrls: ['./showAvailableTable.component.css']
})
export class ShowAvailableTableComponent implements OnInit {
  public booking : ITable ;
  constructor(private activeRoute: ActivatedRoute, private router: Router, private reservation: ReservationService, private AvailableSeats: ReservationService)
  {
    this.booking = { id: 0, no: 0 , nOofPersons : 0 }
  }

  ngOnInit()
  {
    this.booking = this.reservation.AvailableTable;
  }

}
