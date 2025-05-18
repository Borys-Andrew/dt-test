export type Ingredient = {
  id: number;
  name: string;
  amount: number;
  unit: string;
};

export type Recipe = {
  id: number;
  title: string;
  extendedIngredients: Ingredient[];
  readyInMinutes: number;
  servings: number;
  summary: string;
  image: string;
};

export type RecipeSearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};
