export interface Photo {
  id: string;
  url: string;
  date: string;
  isFavorite: boolean;
  people?: string[];
  location?: string;
  description?: string;
}

export interface Collection {
  id: string;
  name: string;
  count: number;
  cover: string;
}

export interface Person {
  id: string;
  name: string;
  count: number;
  avatar: string;
}
