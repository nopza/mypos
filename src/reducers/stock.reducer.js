import {
  STOCK_SUCCESS,
  STOCK_FETCHING,
  STOCK_FAILED,
  STOCK_CLEAR
} from "../constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case STOCK_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case STOCK_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case STOCK_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    case STOCK_CLEAR:
      return { ...state, result: null, isFetching: false, isError: false };
    default:
      return state;
  }
};
