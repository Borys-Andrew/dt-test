import React from 'react';

import RecipesList from '@/components/RecipesList';

import { fetchRecipes } from '@/api';
import { RecipeSearchParams } from '@/types';

type Props = {
  searchParams: RecipeSearchParams;
};

export default async function RecipesPage({ searchParams }: Props) {
  const recipes = await fetchRecipes(searchParams);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-6 text-black">
      <h1 className="mb-6 text-3xl font-bold">Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <RecipesList recipes={recipes} />
      )}
    </div>
  );
}
