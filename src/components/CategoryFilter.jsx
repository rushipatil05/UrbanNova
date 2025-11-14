export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/50'
              : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-rose-50 border-2 border-orange-200 hover:border-orange-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
