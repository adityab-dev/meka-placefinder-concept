import FiltersCategory from "./FiltersCategory/FiltersCategory";
import FiltersFeatures from "./FiltersFeatures/FiltersFeatures";
import FiltersHeaderText from "./FiltersHeaderText/FiltersHeaderText";
import FiltersLocation from "./FiltersLocation/FiltersLocation";
import FiltersRange from "./FiltersRange/FiltersRange";
import FiltersSize from "./FiltersSize/FiltersSize";
import FiltersStyle from "./FiltersStyle/FiltersStyle";

import "./Filters.css";

function Filters() {
  return (
    <div>
      <FiltersHeaderText />
      <FiltersLocation />
      <FiltersCategory />
      <FiltersRange />
      <FiltersSize />
      <FiltersFeatures />
      <FiltersStyle />
    </div>
  );
}

export default Filters;
