export const enum typesFilterValues {
  all = "All",
  building = "Building",
  apartment = "Apartment",
  office = "Office",
  shop = "Shop",
  house = "House",
}

export const all = typesFilterValues.all;
export const building = typesFilterValues.building;
export const apartment = typesFilterValues.apartment;
export const office = typesFilterValues.office;
export const shop = typesFilterValues.shop;
export const house = typesFilterValues.house;

export const typeValues = [all, building, apartment, office, shop, house];

export const enum featuresFilterValues {
  ac_heating = "Ac & Heater",
  clubhouse = "Clubhouse",
  dishWasher = "Dishwasher",
  spa = "Spa",
  balcony = "Balcony",
  pool = "Pool",
  fitness_centre = "Fitness Center",
  valet_parking = "Valet Parking",
}

export const ac_heating = featuresFilterValues.ac_heating;
export const clubhouse = featuresFilterValues.clubhouse;
export const dishWasher = featuresFilterValues.dishWasher;
export const spa = featuresFilterValues.spa;
export const balcony = featuresFilterValues.balcony;
export const pool = featuresFilterValues.pool;
export const fitness_centre = featuresFilterValues.fitness_centre;
export const valet_parking = featuresFilterValues.valet_parking;

export const featuresValues = [
  ac_heating,
  clubhouse,
  dishWasher,
  spa,
  balcony,
  pool,
  fitness_centre,
  valet_parking,
];

export const enum styleFilterValues {
  a_frame = "A-Frame",
  dome = "Dome",
  cottage = "Cottage",
  spanish = "Spanish",
}

export const a_frame = styleFilterValues.a_frame;
export const dome = styleFilterValues.dome;
export const cottage = styleFilterValues.cottage;
export const spanish = styleFilterValues.spanish;

export const styleValues = [a_frame, dome, cottage, spanish];
