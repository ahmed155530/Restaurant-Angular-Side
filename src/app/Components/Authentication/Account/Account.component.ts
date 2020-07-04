import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication.service';
import { Subscription } from 'rxjs';
import { ICustomer } from 'src/app/Interfaces/ICustomer';
import { IReview } from 'src/app/Interfaces/IReview';
import { strict } from 'assert';

@Component({
  selector: 'app-Account',
  templateUrl: './Account.component.html',
  styleUrls: ['./Account.component.css']
})
export class AccountComponent implements OnInit {
  private subscriptions : Subscription[] = [];
  cust : ICustomer;
  reviews : IReview[] = [] ;
  postedReview : IReview;
  constructor(private activeRoute: ActivatedRoute, private authService: AuthenticationService, private router : Router)
  {
    this.postedReview = { customer_Id: "", food_Id : 0 , reviewContent :""}
  }

  ngOnInit()
  {
    var id = localStorage.getItem("Customer_Id");
    this.cust = {"UserId":id }
    this.subscriptions.push(this.authService.getAllReviewsForCustomer(this.cust).subscribe(res =>
      {
        console.log(res);
        this.reviews = res ;
        for(let i=0; i<this.reviews.length; i++)
        {
          //alert("review number : "+[i])
          var button = document.getElementById(this.reviews[i].food_Id.toString());
          if (this.reviews[i].reviewContent.toString() === null || this.reviews[i].reviewContent.toString()  === "")
          {
            button.textContent = "Post Review" ;
            console.log("button post "+button.textContent);
          }
          else
          {
            button.textContent = "Edit your Review";
            console.log("button edit " +button.textContent);
          }
        }
      },
      err =>
      {
        console.log(err);
      }));
  }


  postReview(textTitle:string, id:number )
  {
    console.log(textTitle);
    var customer_Id = localStorage.getItem('Customer_Id');
    console.log(customer_Id);
    var text = textTitle;
    if(text === null || text === "")
    {
      alert("Please enter review content!");
    }
    else
    {
      if (customer_Id != null || customer_Id != "")
      {
        this.postedReview.customer_Id = customer_Id;
        this.postedReview.ReviewContent = textTitle;
        this.postedReview.food_Id = id;
        this.authService.postReview(this.postedReview).subscribe((res: string) =>
        {
          console.log(res);
          var response = res ;
          this.router.navigateByUrl('/myAccount');
        },
        err =>
        {
          console.log(err);
        });
      }
    }

  }

}
