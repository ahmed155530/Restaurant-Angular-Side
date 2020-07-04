import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/Services/Food.service';
import { IFood } from 'src/app/Interfaces/IFood';
import { IReview } from 'src/app/Interfaces/IReview';

@Component({
  selector: 'app-FoodDetails',
  templateUrl: './FoodDetails.component.html',
  styleUrls: ['./FoodDetails.component.css']
})
export class FoodDetailsComponent implements OnInit {
  public food : IFood ;
  reviews :any[] = [] ;
  constructor(private activeRoute: ActivatedRoute, private foodService : FoodService)
  {
  }

  ngOnInit()
  {
    let id: number;
    this.activeRoute.paramMap.subscribe(params => {
      id = Number(params.get('id'));
      this.getFoodById(id);
      this.getAllReviews(id);
    });
  }


  private getFoodById(foodId) {
    this.foodService.getFoodById(Number(foodId)).subscribe(
      (response:IFood) => {
        console.log(response);
        this.food = response;
        this.reviews = response.reviews;
        console.log(this.reviews);
      },
      (err) => { console.log(err); }
    );
  }

  private getAllReviews(foodId)
  {
    this.foodService.getAllReviews(Number(foodId)).subscribe((response: any) =>
    {
      console.log(response);
      this.reviews = response ;
    },error =>
    {
      console.log(error);
    });
  }

}
