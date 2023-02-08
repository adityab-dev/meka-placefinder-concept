import { lowerLimit, upperLimit } from "../../../constants/input-names";
import { rangeChangeHandler } from "../../../helper-functions/helper-functions";
import { useAppSelector } from "../../../store/hooks/hooks";

function FiltersRange() {
  const lowerLimitNumber = useAppSelector(
    (state) => state.locations.filters.price[0]
  );
  const upperLimitNumber = useAppSelector(
    (state) => state.locations.filters.price[1]
  );

  return (
    <div className="filters-category-range">
      <label className="filters-category-heading">Price Range</label>
      <div className="range-inputs">
        <input
          type="range"
          min="0"
          max="50"
          step="2"
          list="range-markers"
          name={lowerLimit}
          id={lowerLimit}
          onChange={(event) => rangeChangeHandler(event)}
          value={lowerLimitNumber}
        />

        <input
          type="range"
          min="50"
          max="100"
          step="2"
          list="range-markers"
          name={upperLimit}
          id={upperLimit}
          onChange={(event) => rangeChangeHandler(event)}
          value={upperLimitNumber}
        />
      </div>

      <div className="range-markers-container">
        <div>$0</div>
        <div>$100</div>
      </div>
    </div>
  );
}

export default FiltersRange;
