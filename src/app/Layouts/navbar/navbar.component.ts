import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/Authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogged : boolean;
  constructor(private accountService: AuthenticationService, private router: Router) { }

  ngOnInit()
  {
    if(this.accountService.isLogged())
    {
      this.islogged = true ;
    }
    else
    {
      this.islogged = false ;
    }
  }

logout()
{
  this.accountService.logout();
  this.router.navigateByUrl('/');
}

}
