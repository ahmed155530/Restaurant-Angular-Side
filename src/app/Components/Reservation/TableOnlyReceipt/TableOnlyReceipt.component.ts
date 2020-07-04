import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { IBooking } from 'src/app/Interfaces/IBooking';
import { IReceipt } from 'src/app/Interfaces/IReceipt';

@Component({
  selector: 'app-TableOnlyReceipt',
  templateUrl: './TableOnlyReceipt.component.html',
  styleUrls: ['./TableOnlyReceipt.component.css']
})
export class TableOnlyReceiptComponent implements OnInit {
  Receipt : IReceipt ;
  constructor(private reservation: ReservationService)
  {

      this.Receipt = {
        customerName : '',
        reservedDate: "",
        checkInTime: 0,
        checkOutTime: 0,
        tableNO: 0,
        nOofPersons: 0,
      };

  }

  ngOnInit()
  {
    this.Receipt = this.reservation.receiptDetails;
  }

}
