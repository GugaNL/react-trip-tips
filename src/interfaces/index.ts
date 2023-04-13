export interface PlaceImage {
  src: string;
  alt?: string;
}

export interface PlaceItem {
  id: number,
  title: string;
  rating: string;
  dist: string;
  stay: string;
  price: string;
  arrayImages: Array<PlaceImage>;
}
