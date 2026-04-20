interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Category: {params.category}</h1>
      <p className="mt-2 text-gray-700">Category page placeholder.</p>
    </main>
  );
}
