import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication.service';
import { ILogin } from 'src/app/Interfaces/ILogin';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  user: ILogin;
  constructor(private accountService: AuthenticationService, private router: Router)
  {
    this.user = { UserName: "", Password: "" };
  }

  ngOnInit() {
  }


  signIn(UserName: string, Password: string)
  {
    console.log(this.user);
    this.accountService.userAuthentication(UserName, Password).subscribe((data: any) =>
    {
      alert(data.auth_token.token);
      alert(data.id);
      console.log(data.auth_token.token);
      localStorage.setItem('userToken', data.auth_token.token);
      localStorage.setItem('Customer_Id', data.id);
      
    },
    (err: HttpErrorResponse) =>
    {
      console.error(err);
    });
  }
}
