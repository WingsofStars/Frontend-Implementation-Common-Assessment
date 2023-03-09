export interface returnRecipes{
    searchString : string,
    recipes: Recipes[],
  }
  
  export interface Recipes{
    "image" : string,
    "label" : string,
    "url" : string,
    "yield" : number,
  
  }