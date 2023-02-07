import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks/hooks";

import Filters from "./Components/Filters/Filters";
import PropertyList from "./Components/PropertyList/PropertyList";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";
import { onFiltersChange } from "./store/slices/locations-slice";

function App() {
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
    </main>
  );
}

export default App;
