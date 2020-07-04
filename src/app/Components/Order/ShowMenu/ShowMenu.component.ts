import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/Order.service';
import { IFoodCategory } from 'src/app/Interfaces/IFoodCategory';
import { IFood } from 'src/app/Interfaces/IFood';
import { IFoodOrder } from 'src/app/Interfaces/IFoodOrder';
import { ReservationService } from 'src/app/Services/Reservation.service';

@Component({
  selector: 'app-ShowMenu',
  templateUrl: './ShowMenu.component.html',
  styleUrls: ['./ShowMenu.component.css']
})
export class ShowMenuComponent implements OnInit {
  show: boolean = true;
  private subscriptions: Subscription[] = [];
  CategoriesList : IFoodCategory[] = [] ;
  products : IFood[] = [] ;
  OrderedList: IFoodOrder[] = [];
  CategoryId : number ;
  filteredList : IFood[] ;
  constructor(private orderService : OrderService, private activeRoute: ActivatedRoute, private router: Router, private reservation : ReservationService)
  {
  }

  ngOnInit()
  {
    this.subscriptions.push(this.orderService.getAllCategories().subscribe(response =>
      {
        console.log(response);
        this.CategoriesList = response;
      } ,
      error =>
      {
        console.log(error);
      }));


    this.subscriptions.push(this.orderService.getAllProducts().subscribe(response =>
    {
      console.log(response);
      this.products = response;
    },
      error =>
      {
        console.log(error);
      }));

  }


  UpdateList(id : number )
  {
    var isExist = this.OrderedList.find(function (element)
    {
      return element.food_Id == id;
    });
    if(isExist)
    {
      const One = this.OrderedList.findIndex(i => i.food_Id === id);
      this.OrderedList.splice(One, 1);
      console.log(this.OrderedList);
    }
    else
    {
      this.OrderedList.push();
      console.log(this.OrderedList);
    }
  }

  increaseQuantity(item : IFood)
  {

    var isExist = this.OrderedList.find(function (element:IFoodOrder)
    {
      return element.food_Id == item.id;
    });
    if(!isExist)
    {
      item.neededQuantity = 0;
      this.OrderedList.push({ food_Id: item.id, Quantity : 1});
      console.log(this.OrderedList);
      //var divv = document.getElementById(item.id.toString());
      //var div2 = document.getElementById(item.name);
      //divv.append(div2);
      if(item.neededQuantity < item.stock)
      {
        //alert("increased first time");
        item.neededQuantity++;

      }

    }
    else
    {
    this.OrderedList.find( (element:IFoodOrder) =>
    {
      if (element.food_Id == item.id)
      {
        if (item.neededQuantity < item.stock)
        {
          element.Quantity++;
          item.neededQuantity++;
          console.log(this.OrderedList);
        }
      }
    });
    }
  }



  decreaseQuantity(item: IFood)
  {
    this.OrderedList.find( (element:IFoodOrder) =>
    {
      if (element.food_Id == item.id)
      {
        element.Quantity--;
        item.neededQuantity--;
        if (element.Quantity <= 0)
        {
          const One = this.OrderedList.findIndex(i => i.food_Id.toString() == item.id.toString());
          this.OrderedList.splice(One, 1);
          item.neededQuantity = 0;
        }
        console.log(this.OrderedList);
      }

    });
  }



  sendOrders()
  {
    this.reservation.sendBooking(this.OrderedList);
  }




  getProductsByCatId()
  {
    this.orderService.getFoodsByCategoryId(this.CategoryId).subscribe(
      (response) =>
      {
        console.log(response);
        this.products = response ;
      },
      error =>
      {
        console.log(error);
      });
  }


  getFilteredProducts()
  {
    this.filteredList = [] ;
    this.products.filter((value, index) =>
    {
      if (value.foodCategory_Id == this.CategoryId)
      {
        this.filteredList.push(value);
      }
    });
    console.log(this.filteredList);
  }
}
