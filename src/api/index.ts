import { Recipe, RecipeSearchParams } from '@/types';

const API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const fetchRecipes = async ({
  query,
  cuisine,
  maxReadyTime,
}: RecipeSearchParams): Promise<Recipe[]> => {
  const url = new URL(`${BASE_URL}/complexSearch`);
  url.searchParams.set('apiKey', API_KEY ?? '');

  if (query) url.searchParams.set('query', query);
  if (cuisine) url.searchParams.set('cuisine', cuisine);
  if (maxReadyTime) url.searchParams.set('maxReadyTime', maxReadyTime);

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch recipes');

  const data = await res.json();
  return data.results;
};

export const fetchRecipeDetails = async (id: string): Promise<Recipe> => {
  const url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return res.json();
};
