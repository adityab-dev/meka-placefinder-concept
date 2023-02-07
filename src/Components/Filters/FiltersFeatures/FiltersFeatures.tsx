import { featuresValues } from "../../../constants/filter-type-values";

import { features } from "../../../constants/input-names";

import { inputChangeHandler } from "../../../helper-functions/helper-functions";

function FiltersFeatures() {
  return (
    <div className="filter-category-container">
      <h4 className="filters-category-heading">Feaures</h4>
      {featuresValues.map((value) => {
        return (
          <div
            className="filters-categories"
            key={value}
          >
            <input
              type="checkbox"
              value={value}
              id={value}
              name={features}
              onChange={(event) => inputChangeHandler(event)}
            />
            <label htmlFor={value}>{value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default FiltersFeatures;
