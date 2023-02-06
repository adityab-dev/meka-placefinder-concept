export type Location = {
  id: number;
  name: string;
  city: string;
  longitude: number;
  latitude: number;
  image: string;
  type: string;
  price: number;
  style: string;
  features: string;
};

export type Filters = {
  type: string[];
  features: string[];
  style: string[];
  price: string;
};

export type InitialLocationsState = {
  locations: Location[];
  filters: Filters;
  filteredLocations: Location[];
};