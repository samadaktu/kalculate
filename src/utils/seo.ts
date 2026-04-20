export interface SeoMeta {
  title: string;
  description: string;
  path: string;
}

export function buildCanonicalUrl(path: string): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalculate.me").replace(/\/$/, "");
  const normalizedPath = path.trim();

  if (!normalizedPath || normalizedPath === "/") {
    return siteUrl;
  }

  return `${siteUrl}/${normalizedPath.replace(/^\//, "")}`;
}
