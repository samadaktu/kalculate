interface CalculatorPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await Promise.resolve(params);

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Calculator: {slug}</h1>
      <p className="mt-2 text-gray-700">Calculator page placeholder.</p>
    </main>
  );
}
