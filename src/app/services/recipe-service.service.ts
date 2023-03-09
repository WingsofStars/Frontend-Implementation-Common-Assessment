import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http: HttpClient ) { }


  

getPossibleRecipes (ingredients: string){
  let apiID= "9a840078";
  let apiKey= "0c8fb590d4b46ff965ea4b3ce00e3a07";
  let url = "https://api.edamam.com/search?app_id="+ apiID +"&app_key=" + apiKey + "&q=" + ingredients;
  return this.http.get(url);
}

}
