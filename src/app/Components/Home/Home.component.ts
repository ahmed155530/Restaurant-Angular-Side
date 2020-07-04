import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/Services/Food.service';
import { Subscription } from 'rxjs';
import { IFood } from 'src/app/Interfaces/IFood';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  subscriptions: Subscription[] = [];
  foodList : IFood[] = [];
  food : IFood;
  foodId : number ;
  constructor(private activeRoute: ActivatedRoute, private foodService: FoodService, private router: Router) { }

  ngOnInit():void
  {
    this.subscriptions.push(this.foodService.getAllFoods().subscribe(
      (response:IFood[]) =>
      {
        console.log(response);
        this.foodList = response;
      },
      (err : Error) =>
      {
        console.log(err);
      }
    ));


    // this.activeRoute.paramMap.subscribe(params => {
    //   this.foodId = Number(params.get('pid'));
    //   this.getFoodById(this.foodId);
    // });

  }

  // private getFoodById(prdID) {
  //   this.foodService.getFoodById(Number(prdID)).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.food = response;
  //     },
  //     (err) => { console.log(err); }
  //   );
  // }

}
