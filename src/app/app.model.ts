export interface ProductPage {
  categories: string[];
  categoryType: Object[];
  groups: boolean;
  id: string;
  name: string;
  totalPages: number
}

export interface Product {
  flags: Flag[];
  hero: ProductImage;
  id: string;
  images: ProductImage[];
  links: Link;
  messages: string[];
  name: string;
  priceRange: PriceRange;
  reviews: Review;
  swatches: Object[];
  thumbnail: ProductImage;
}

export interface Flag {
  bopisSupppress: boolean;
  id: string;
  rank: number;
}

export interface ProductImage {
  alt: string;
  height: number;
  href: string;
  meta: string;
  rel: string;
  size: string;
  width: number;
}

export interface Link {
  www: string;
}

export interface PriceRange {
  selling: Range;
}

export interface Range {
  low: number;
  high: number;
}

export interface Review {
  averageRating: number;
  id: string;
  likelihood: number;
  recommendationCount: number;
  reviewCount: number;
  type: string;
}