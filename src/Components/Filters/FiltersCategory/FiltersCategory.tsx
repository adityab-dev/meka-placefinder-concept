import { type } from "../../../constants/input-names";

import {
  all,
  apartment,
  building,
  house,
  office,
  shop,
} from "../../../constants/filter-type-values";

function FiltersCategory() {
  return (
    <div className="filter-category-container">
      <h4 className="filters-category-heading">Type of places</h4>

      <div className="filters-categories">
        <input type="checkbox" name={type} value={all} id={all} />
        <label htmlFor={all}>All</label>
      </div>

      <div className="filters-categories">
        <input type="checkbox" name={type} value={building} id={building} />
        <label htmlFor={building}>Building</label>
      </div>

      <div className="filters-categories">
        <input type="checkbox" name={type} value={apartment} />
        <label htmlFor={apartment}>Apartment</label>
      </div>

      <div className="filters-categories">
        <input type="checkbox" name={type} value={office} id={office} />
        <label htmlFor={office}>Office</label>
      </div>

      <div className="filters-categories">
        <input type="checkbox" name={type} value={shop} id={shop} />
        <label htmlFor={shop}>Shop</label>
      </div>

      <div className="filters-categories">
        <input type="checkbox" name={type} value={house} id={house} />
        <label htmlFor={house}>House</label>
      </div>
    </div>
  );
}

export default FiltersCategory;
