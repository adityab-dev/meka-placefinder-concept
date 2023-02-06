export default function FiltersStyle() {
  return (
    <div className="filter-category-container">
      <h4 className="filters-category-heading">Style</h4>
      <div className="filters-categories">
        <input type="checkbox" />
        <label>A-Frame</label>
      </div>
      <div className="filters-categories">
        <input type="checkbox" />
        <label>Dome</label>
      </div>
      <div className="filters-categories">
        <input type="checkbox" />
        <label>Cottage</label>
      </div>
      <div className="filters-categories">
        <input type="checkbox" />
        <label>Spanish</label>
      </div>
    </div>
  );
}
