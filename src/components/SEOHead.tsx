interface SEOHeadProps {
  title: string;
  description: string;
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  return (
    <>
      <h2 className="sr-only">{title}</h2>
      <p className="sr-only">{description}</p>
    </>
  );
}
