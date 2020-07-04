import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../Interfaces/IUser';
import { environment } from 'src/environments/environment';
import { ICustomer } from '../Interfaces/ICustomer';
import { Observable } from 'rxjs';
import { IReview } from '../Interfaces/IReview';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router)
  {
  }

  registerUser(user: IUser)
  {
    return this.httpClient.post('http://localhost:60140/api/ApplicationUser/Register',user);
  }


  userAuthentication(UserName: string, Password: string)
  {
    var data = {userName : UserName , password : Password};
    var reqHeader = new HttpHeaders({ contentType: 'application/json'});
    return this.httpClient.post('http://localhost:60140/api/ApplicationUser/Login',data);
  }


  login(token: any)
  {
    alert(token);
    localStorage.setItem('userToken', token);
    this.router.navigateByUrl('/');
  }

  isLogged():boolean
  {
    if (localStorage.getItem('Customer_Id') && localStorage.getItem('userToken'))
    {
      return true ;
    }
    else
    {
      return false;
    }
  }

  logout()
  {
    localStorage.removeItem('Customer_Id');
    localStorage.removeItem('userToken');

    localStorage.removeItem('booking');
    localStorage.removeItem('Table_Id');
    localStorage.removeItem('ReservedDate');
    localStorage.removeItem('CheckInTime');
    localStorage.removeItem('NOofGuests');
    this.router.navigateByUrl('/');
  }



  getAllReviewsForCustomer(cust: ICustomer): Observable<IReview[]>
  {
    return this.httpClient.post<IReview[]>(`${environment.API_URL}/api/Review/getReviewsForCustomer`,cust);
  }
  postReview(review : IReview):Observable<string>
  {
    return this.httpClient.post<string>(`${environment.API_URL}/api/Review/postReview` ,review);
  }


}
