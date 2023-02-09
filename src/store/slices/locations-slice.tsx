import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import DUMMY_DATA from "../../Assets/dummyData";
import { all } from "../../constants/filter-type-values";

import { type, features, style, lowerLimit, upperLimit } from "../../constants/input-names";

import {
  Filters,
  InitialLocationsState,
  InputInteractionPayloadType,
  PriceChangePayloadType,
} from "../../Types/Types";

const initialFilters: Filters = {
  features: [],
  style: [],
  type: [],
  price: [0, 100],
};

const initialShowLocation = { lat: 0, lng: 0, show: false, id: NaN };

const initialLocationsState: InitialLocationsState = {
  locations: DUMMY_DATA,
  filters: initialFilters,
  filteredLocations: [],
  totalResults: 0,
  showLocation: initialShowLocation,
};

const locationsSlice = createSlice({
  initialState: initialLocationsState,
  name: "Locations",
  reducers: {
    inputInteraction(state, action: PayloadAction<InputInteractionPayloadType>) {
      const { name, value, checked } = action.payload;

      const isValid = name === type || name === features || name === style;

      if (isValid) {
        if (checked) state.filters[name].push(value);

        if (!checked)
          state.filters[name].splice(
            state.filters[name].findIndex((filterValue) => filterValue === value),
            1
          );
      }
    },

    onPriceChange(state, action: PayloadAction<PriceChangePayloadType>) {
      const { name, value } = action.payload;

      const isValid = name === lowerLimit || name === upperLimit;

      if (isValid) {
        if (name === lowerLimit) state.filters.price[0] = +value;
        if (name === upperLimit) state.filters.price[1] = +value;
      }
    },

    onFiltersChange(state) {
      const { style, features, type, price } = state.filters;

      const onStart =
        !type.length && !features.length && !style.length && price[0] === 0 && price[1] === 100;

      if (onStart) {
        state.filteredLocations = state.locations;
      } else {
        const locations = state.locations;

        const filteredStyles = locations.filter((location) => style.includes(location.style));

        const filteredFeatures = locations.filter((location) =>
          features.includes(location.features)
        );

        const filteredPrice = locations.filter(
          (location) => price[0] < location.price && location.price < price[1]
        );

        let filteredType = [];

        if (type.includes(all)) filteredType = state.locations;
        else {
          filteredType = locations.filter((location) => type.includes(location.type));
        }

        const arrOfFilterArr = [filteredFeatures, filteredPrice, filteredStyles, filteredType];

        let arrayOfIds: Array<number> = [];
        let numOfFilters = 0;

        // * adding ids of non-empty arr. to arrayOfIds.
        // * num of non-empty arr. = no. of filters.
        // * consecutive ids = numOfFilters : item common in all filters.

        for (let array of arrOfFilterArr) {
          if (array.length) {
            numOfFilters += 1;
            for (let location of array) {
              arrayOfIds.push(location.id);
            }
          }
        }

        let areSame = 0;
        let filteredIds: Array<number> = [];

        arrayOfIds.sort((a, b) => a - b);

        filteredIds = arrayOfIds.filter((id, index) => {
          if (arrayOfIds[index] === arrayOfIds[index + 1]) {
            areSame += 1;
          } else {
            areSame = 0;
          }
          if (areSame === numOfFilters - 1) {
            areSame = 0;
            return id;
          }
          return null;
        });

        const filteredLocations = locations.filter((location) => filteredIds.includes(location.id));

        state.filteredLocations = filteredLocations;
      }

      state.totalResults = state.filteredLocations.length;
    },

    onCardClick(state, action: PayloadAction<number>) {
      const id = action.payload;

      if (id === state.showLocation.id && state.showLocation.show === true)
        state.showLocation.show = false;
      else if (id !== state.showLocation.id) {
        const [{ latitude, longitude }] = state.locations.filter((location) => location.id === id);

        state.showLocation = { lat: latitude, lng: longitude, show: true, id };
      } else if (id === state.showLocation.id && state.showLocation.show === false) {
        state.showLocation.show = true;
      }
    },
  },
});

export const { inputInteraction, onFiltersChange, onPriceChange, onCardClick } =
  locationsSlice.actions;
export default locationsSlice.reducer;
