import { Injectable } from '@angular/core';
import { IFood } from '../Interfaces/IFood';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IReview } from '../Interfaces/IReview';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient : HttpClient) { }

  getAllFoods(): Observable<IFood[]>
  {
    return this.httpClient.get<IFood[]>(`${environment.API_URL}/api/Food`);
  }


  getFoodById(foodId: number): Observable<IFood>
  {
    return this.httpClient.get<IFood>(
      `${environment.API_URL}/api/Food/${foodId}`
    );
  }

  getAllReviews(foodId:number):Observable<IReview>
  {
    return this.httpClient.get<IReview>(`${environment.API_URL}/api/Review/${foodId}`);
  }

}
