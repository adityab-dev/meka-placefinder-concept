import {
  inputInteraction,
  onFiltersChange,
} from "../store/slices/locations-slice";
import { OnChange, InputInteractionPayloadType } from "../Types/Types";

import store from "../store/store/store";

export function inputChangeHandler(event: OnChange) {
  function changeHandler(event: OnChange) {
    const { name, value, checked } = event.target;

    const { dispatch } = store;

    const payload: InputInteractionPayloadType = {
      name,
      value,
      checked,
    };

    dispatch(inputInteraction(payload));
    dispatch(onFiltersChange());
  }

  changeHandler(event);
}
