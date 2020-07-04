import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { Subscription } from 'rxjs';
import { IReceipt } from 'src/app/Interfaces/IReceipt';
import { IFoodOrder } from 'src/app/Interfaces/IFoodOrder';

@Component({
  selector: 'app-Receipt',
  templateUrl: './Receipt.component.html',
  styleUrls: ['./Receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  subscriptions: Subscription[] = [];
  Receipt: IReceipt;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private reservation: ReservationService
  ) {
    this.Receipt = {
      customerName: '',
      foodOrders: [],
      reservedDate: "",
      checkInTime: 0,
      checkOutTime: 0,
      tableNO: 0,
      nOofPersons: 0,
      totalBookingPrice: 0,
    };
  }

  ngOnInit() {
    this.Receipt = this.reservation.receiptDetails;
  }
}
