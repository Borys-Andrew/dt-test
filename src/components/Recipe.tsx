import Image from 'next/image';

import { Recipe as RecipeType } from '@/types';

type Props = {
  recipe: RecipeType;
};

export default function Recipe({ recipe }: Props) {
  return (
    <div className="w-full max-w-3xl rounded bg-white p-6 shadow-md">
      <h1 className="mb-6 text-3xl font-bold">{recipe.title}</h1>

      <div className="mb-6 overflow-hidden rounded-lg shadow">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={800}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <p
        className="mb-6 text-gray-700"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />

      <div className="mb-4 text-gray-800">
        <strong>Preparation time:</strong> {recipe.readyInMinutes} minutes
      </div>

      <div className="mb-6 text-gray-800">
        <strong>Servings:</strong> {recipe.servings}
      </div>

      <h2 className="mb-2 text-2xl font-semibold text-gray-900">Ingredients</h2>

      <ul className="list-inside list-disc text-gray-700">
        {recipe.extendedIngredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
