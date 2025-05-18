import Image from 'next/image';
import Link from 'next/link';

import { Recipe } from '@/types';

type RecipePreview = Pick<Recipe, 'id' | 'image' | 'title'>;

type Props = {
  recipes: RecipePreview[];
};

export default function RecipesList({ recipes }: Props) {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="group rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
        >
          <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {recipe.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
