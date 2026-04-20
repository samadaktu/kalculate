export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}

export function buildCanonicalUrl(path: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalculate.me";
  return `${siteUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
