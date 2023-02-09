import RangeInput from "../../Input/RangeInput";

function FiltersRange() {
  return (
    <div className="filters-category-range">
      <label className="filters-category-heading">Price Range</label>
      <div className="range-inputs">
        <RangeInput />
      </div>

      <div className="range-markers-container">
        <div>$0</div>
        <div>$100</div>
      </div>
    </div>
  );
}

export default FiltersRange;
