import { type } from "../../../constants/input-names";

import { inputChangeHandler } from "../../../helper-functions/helper-functions";

import { typeValues } from "../../../constants/filter-type-values";

function FiltersCategory() {
  return (
    <div className="filter-category-container">
      <h4 className="filters-category-heading">Type of places</h4>
      {typeValues.map((value) => {
        return (
          <div
            className="filters-categories"
            key={value}
          >
            <input
              type="checkbox"
              name={type}
              value={value}
              id={value}
              onChange={(event) => inputChangeHandler(event)}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default FiltersCategory;
