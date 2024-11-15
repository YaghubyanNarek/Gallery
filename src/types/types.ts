export interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  liked: boolean;
  alt: string;
  source?: string;
}

export interface PexelsApiResponse {
  id: number;
  photographer: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
  photos: Photo[];
}

export interface IContext {
  query: string;
  photos: Photo[];
  loading: boolean;
  error: string | null;
  searchPhotos: (query: string) => Promise<void>;
}

export interface IExactPhoto {
  photographer: string;
  src: string;
  alt: string;
}
