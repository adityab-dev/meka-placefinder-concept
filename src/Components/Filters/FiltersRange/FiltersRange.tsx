import { price } from "../../../constants/input-names";

import { inputChangeHandler } from "../../../helper-functions/helper-functions";

function FiltersRange() {
  return (
    <div className="filters-category-range">
      <label
        className="filters-category-heading"
        htmlFor={price}
      >
        Price Range
      </label>
      <input
        type="range"
        name={price}
        id={price}
        onChange={(event) => inputChangeHandler(event)}
      />

      <div>
        <div>$0</div>
        <div>$10000</div>
      </div>
    </div>
  );
}

export default FiltersRange;
