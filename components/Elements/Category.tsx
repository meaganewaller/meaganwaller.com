export function Category({ category, cb, activeCategory }): JSX.Element {
  return (
    <button
      onClick={() => cb()}
      className={`rounded-full px-6 py-1 ${
        activeCategory === category && "ring-2 ring-teal-500 text-teal-500"
      } hover:ring-2 hover:ring-gray-300 `}
    >
      <span className="text-base font-medium uppercase">{category === "" ? "all" : category}</span>
    </button>
  );
}
