import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { AboutUsComponent } from './Components/AboutUs/AboutUs.component';
import { LoginComponent } from './Components/Authentication/Login/Login.component';
import { RegisterComponent } from './Components/Authentication/Register/Register.component';
import { BookingComponent } from './Components/Reservation/Booking/Booking.component';
import { PaymentComponent } from './Components/Reservation/Payment/Payment.component';
import { ShowMenuComponent } from './Components/Order/ShowMenu/ShowMenu.component';
import { AvailableTableComponent } from './Components/Reservation/AvailableTable/AvailableTable.component';
import { ShowAvailableTableComponent } from './Components/Reservation/showAvailableTable/showAvailableTable.component';
import { ImageComponent } from './Components/Image/Image.component';
import { ImageeComponent } from './Components/Imagee/Imagee.component';
import { FoodDetailsComponent } from './Components/Food/FoodDetails/FoodDetails.component';
import { AccountComponent } from './Components/Authentication/Account/Account.component';
import { NotFoundComponent } from './Components/NotFound/NotFound.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { ReceiptComponent } from './Components/Reservation/Receipt/Receipt.component';
import { TableOnlyReceiptComponent } from './Components/Reservation/TableOnlyReceipt/TableOnlyReceipt.component';


const routes: Routes =
[
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reserve', component: BookingComponent },
  { path : 'pay' , component  :PaymentComponent},
  { path: 'order', component: ShowMenuComponent },
  { path: 'search', component: AvailableTableComponent },
  { path: 'showTable', component: ShowAvailableTableComponent },
  { path: 'image', component: ImageComponent },
  { path: 'imagee', component: ImageeComponent },
  { path: 'foodDetails/:id', component: FoodDetailsComponent },
  { path: 'myAccount', component: AccountComponent },
  { path: 'receipt', component: ReceiptComponent },
  { path: 'TableReceipt', component: TableOnlyReceiptComponent },

  { path: '**', component: NotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
