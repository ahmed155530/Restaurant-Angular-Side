import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { ContentComponent } from './Layouts/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/Authentication/Login/Login.component';
import { RegisterComponent } from './Components/Authentication/Register/Register.component';
import { BookingComponent } from './Components/Reservation/Booking/Booking.component';
import { PaymentComponent } from './Components/Reservation/Payment/Payment.component';
import { ShowMenuComponent } from './Components/Order/ShowMenu/ShowMenu.component';
import { AvailableTableComponent } from './Components/Reservation/AvailableTable/AvailableTable.component';
import { ShowAvailableTableComponent } from './Components/Reservation/showAvailableTable/showAvailableTable.component';
import { ImageComponent } from './Components/Image/Image.component';
import { ImageeComponent } from './Components/Imagee/Imagee.component';
import * as $ from 'jquery'
import { FoodDetailsComponent } from './Components/Food/FoodDetails/FoodDetails.component';
import { HomeComponent } from './Components/Home/Home.component';
import { AccountComponent } from './Components/Authentication/Account/Account.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { ReceiptComponent } from './Components/Reservation/Receipt/Receipt.component';
import { TableOnlyReceiptComponent } from './Components/Reservation/TableOnlyReceipt/TableOnlyReceipt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent ,
    HomeComponent ,
    LoginComponent ,
    RegisterComponent ,
    BookingComponent ,
    PaymentComponent,
    ShowMenuComponent ,
    AvailableTableComponent ,
    ShowAvailableTableComponent ,
    ImageComponent,
    ImageeComponent ,
    FoodDetailsComponent ,
    AccountComponent ,
    NotFoundComponent,
    ContactUsComponent,
    ReceiptComponent,
    TableOnlyReceiptComponent ,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
