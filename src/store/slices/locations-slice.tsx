import { createSlice } from "@reduxjs/toolkit";

import DUMMY_DATA from "../../Assets/dummyData";
import { Filters, InitialLocationsState } from "../../Types/Types";

const initialFilters: Filters = {
  features: [],
  style: [],
  type: [],
  price: "0",
};

const initialLocationsState: InitialLocationsState = {
  locations: DUMMY_DATA,
  filters: initialFilters,
  filteredLocations: [],
};

const locationsSlice = createSlice({
  initialState: initialLocationsState,
  name: "Locations",
  reducers: {},
});

export default locationsSlice.reducer;
