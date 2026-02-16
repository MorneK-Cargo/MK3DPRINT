'use client';

import { Category, CategoryMeta } from '@/lib/inspiration-data';

interface CategoryFilterProps {
  categories: CategoryMeta[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onCategoryChange(cat.slug)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === cat.slug
              ? 'bg-[#36c1b3] text-white shadow-md'
              : 'bg-[#f5f5f7] text-[#86868b] hover:bg-[#e8e8ed] hover:text-[#1d1d1f]'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
