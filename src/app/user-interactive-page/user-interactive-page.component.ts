import { Component } from '@angular/core';
import { Recipes, returnRecipes} from '../services/recipe'
import {RecipeServiceService} from '../services/recipe-service.service'
@Component({
  selector: 'app-user-interactive-page',
  templateUrl: './user-interactive-page.component.html',
  styleUrls: ['./user-interactive-page.component.css']
})
export class UserInteractivePageComponent {
  returnr : returnRecipes;

  userInput: string ="";



constructor(private recipeService : RecipeServiceService ){
  this.returnr = {
    searchString : "",
    recipes: [],
  }

}

  

ngOnInit(){
  if (this.userInput != "") {
    this.returnr.recipes = [];
  this.recipeService.getPossibleRecipes(this.userInput).subscribe(results => {
  console.log(results);
  let data = results as any;
  //grabbing every 8 results (5 days every 3 hours response)
  for (let i = 0; i < data["hits"].length || i < 10; i++) {
    let result = data["hits"][i];
    
    let recipe: Recipes = {
      "image" : result["recipe"].image,
      "label" : result["recipe"].label,
      "url" : result["recipe"].url,
      "yield" : result["recipe"].yield,
      //can also do + "@2x.png" for larger icon
    }
    this.returnr.recipes.push(recipe);
  }
});
}
console.log({ "Recipes": this.returnr });
}





}

