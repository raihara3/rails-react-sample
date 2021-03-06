// constants
import { REQUEST_STATE } from "../constants"

// action
import { RESTAURANTS_FETCHING_ACTION, RESTAURANTS_FETCH_SUCCESS_ACTION } from "../actions"

export interface Action {
  type: String;
  payload?: any;
}

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: []
}

export const restaurantsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case RESTAURANTS_FETCHING_ACTION:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case RESTAURANTS_FETCH_SUCCESS_ACTION:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
}
