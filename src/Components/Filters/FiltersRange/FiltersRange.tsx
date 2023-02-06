function FiltersRange() {
  return (
    <div className="filters-category-range">
      <label className="filters-category-heading">Price Range</label>
      <input type="range" />

      <div>
        <div>$0</div>
        <div>$10000</div>
      </div>
    </div>
  );
}

export default FiltersRange;
