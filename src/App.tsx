import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";

import Filters from "./Components/Filters/Filters";
import PropertyList from "./Components/PropertyList/PropertyList";
import Sidebar from "./Components/Sidebar/Sidebar";
import MapWindow from "./Components/Map/Map";

import { onFiltersChange } from "./store/slices/locations-slice";

import "./App.css";

function App() {
  const toShow = useAppSelector((state) => state.locations.showLocation.show);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onFiltersChange());
  }, [dispatch]);

  return (
    <main className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="filters-container">
        <Filters />
      </div>
      <div className="property-contianer">
        <PropertyList />
      </div>
      {toShow ? <MapWindow /> : null}
    </main>
  );
}

export default App;
