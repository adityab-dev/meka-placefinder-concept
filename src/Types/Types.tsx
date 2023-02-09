import React from "react";

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

export type Price = [number, number];

export type Filters = {
  type: string[];
  features: string[];
  style: string[];
  price: Price;
};

export type ShowLocation = {
  lat: number;
  lng: number;
  show: boolean;
  id: number;
};

export type InitialLocationsState = {
  locations: Location[];
  filters: Filters;
  filteredLocations: Location[];
  totalResults: number;
  showLocation: ShowLocation;
};

export type OnChange = React.ChangeEvent<HTMLInputElement>;

export type InputInteractionPayloadType = {
  name: string;
  value: string;
  checked: boolean;
};

export type PriceChangePayloadType = {
  name: string;
  value: string;
};

export type Values = [number, number];

export type RangeWidthPayloadType = {
  currentLowerValue: number;
  currentUpperValue: number;
};
