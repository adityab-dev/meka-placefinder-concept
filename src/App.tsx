import Filters from "./Components/Filters/Filters";
import PropertyList from "./Components/PropertyList/PropertyList";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

function App() {
  return (
    <main className="app-container flex">
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
