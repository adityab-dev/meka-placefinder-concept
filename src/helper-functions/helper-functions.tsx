import {
  inputInteraction,
  onCardClick,
  onFiltersChange,
  onPriceChange,
} from "../store/slices/locations-slice";

import { OnChange, InputInteractionPayloadType, PriceChangePayloadType } from "../Types/Types";

import store from "../store/store/store";
const { dispatch } = store;

export function inputChangeHandler(event: OnChange) {
  const { name, value, checked } = event.target;

  const payload: InputInteractionPayloadType = {
    name,
    value,
    checked,
  };

  dispatch(inputInteraction(payload));
  dispatch(onFiltersChange());
}

export function rangeChangeHandler(event: OnChange) {
  const { name, value } = event.target;

  const payload: PriceChangePayloadType = {
    name,
    value,
  };

  dispatch(onPriceChange(payload));
  dispatch(onFiltersChange());
}

export function cardClickHandler(id: number) {
  dispatch(onCardClick(id));
}
