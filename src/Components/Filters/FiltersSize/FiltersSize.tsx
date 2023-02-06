function FiltersSize() {
  return (
    <div className="filtres-category-size">
      <label
        className="filters-category-heading"
        id="label-size"
      >
        Size
      </label>
      <div className="filters-size-space-evenly">
        <div className="filters-category-size-container">
          <div className="filters-size-txt">Min</div>
          <input
            type="number"
            placeholder="sq ft"
          />
        </div>
        <div className="filters-category-size-container">
          <div className="filters-size-txt">Max</div>
          <input
            type="number"
            placeholder="sq ft"
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersSize;
