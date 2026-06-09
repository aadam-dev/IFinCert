/** Custom illustrated assets for IFinCert marketing & dashboard */
export const illustrations = {
  hero: "/images/illustrations/hero-geometric.png",
  certifications: "/images/illustrations/certifications-study.png",
  about: "/images/illustrations/about-network.png",
  features: "/images/illustrations/features-split.png",
  patternTile: "/images/illustrations/pattern-tile.svg",
} as const;

/** Legacy aliases for components still using marketingImages */
export const marketingImages = {
  home: illustrations.hero,
  about: illustrations.about,
  certifications: illustrations.certifications,
  faq: illustrations.about,
  auth: illustrations.features,
} as const;
