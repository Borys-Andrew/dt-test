import React from 'react';

import Recipe from '@/components/Recipe';

import { fetchRecipeDetails } from '@/api';
import { Recipe as RecipeType } from '@/types';

type Props = {
  params: {
    id: string;
  };
};

export default async function RecipeDetailsPage({ params }: Props) {
  try {
    const recipe: RecipeType = await fetchRecipeDetails(params.id);

    return (
      <div className="flex min-h-screen flex-col items-center justify-start p-6 text-black">
        <Recipe recipe={recipe} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="rounded bg-white p-6 text-center text-red-600 shadow">
          <p className="text-lg font-bold">Failed to load recipe details.</p>
        </div>
      </div>
    );
  }
}
