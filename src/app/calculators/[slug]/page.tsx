interface CalculatorPageProps {
  params: {
    slug: string;
  };
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-semibold">Calculator: {params.slug}</h1>
      <p className="mt-2 text-gray-700">Calculator page placeholder.</p>
    </main>
  );
}
