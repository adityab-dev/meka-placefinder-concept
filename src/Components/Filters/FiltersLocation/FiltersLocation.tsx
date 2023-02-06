function FiltersLocation() {
  return (
    <div>
      <div className="filters-location-container">
        <label
          htmlFor="location-select"
          className="filters-location-label"
        >
          Location
        </label>
        <select
          id="location-select"
          name="location"
          placeholder="Scotland"
        >
          <option value="scotland">Scotland</option>
        </select>
      </div>
    </div>
  );
}

export default FiltersLocation;
