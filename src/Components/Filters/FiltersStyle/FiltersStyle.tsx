import { inputChangeHandler } from "../../../helper-functions/helper-functions";
import { styleValues } from "../../../constants/filter-type-values";
import { style } from "../../../constants/input-names";

function FiltersStyle() {
  return (
    <div className="filter-category-container">
      <h4 className="filters-category-heading">Style</h4>
      {styleValues.map((value) => {
        return (
          <div
            className="filters-categories"
            key={value}
          >
            <input
              type="checkbox"
              name={style}
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

export default FiltersStyle;
