import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/Authentication.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: IUser;
  constructor(
    private accountService: AuthenticationService,
    private router: Router
  ) {
    this.user = { UserName: '', Password: '', Email: '' };
  }

  addUser() {
    console.log(this.user);
    this.accountService.registerUser(this.user).subscribe(
      (res) =>
      {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit() {}
}
