interface SEOHeadProps {
  title: string;
  description: string;
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  return (
    <section aria-label="SEO metadata placeholder">
      <p>{title}</p>
      <p>{description}</p>
    </section>
  );
}
