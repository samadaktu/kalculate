interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Category: {category}</h1>
      <p className="mt-2 text-gray-700">Category page placeholder.</p>
    </main>
  );
}
