export type Images = {
  thumbnail: string;
};

export type Prices = {
  base: number;
  after_discount?: number;
}

export type Attributes = {
  colors: string;
}

export type Product = {
  id: number;
  title: string;
  currency: string;
  images: Images;
  prices: Prices;
  attributes: Attributes;
};

export type Products = Product[];
