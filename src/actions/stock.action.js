import { httpClient } from "./../utils/HttpClient";
import {
  STOCK_SUCCESS,
  STOCK_FETCHING,
  STOCK_FAILED,
  server,
  STOCK_CLEAR,
} from "../constants";

export const setStateStockToSuccess = (payload) => ({
  type: STOCK_SUCCESS,
  payload,
});

const setStateStockToFetching = () => ({
  type: STOCK_FETCHING,
});

const setStateStockToFailed = () => ({
  type: STOCK_FAILED,
});

const setStateStockToClear = () => ({
  type: STOCK_CLEAR,
});

export const clearProduct = () => {
  return (dispatch) => {
    dispatch(setStateStockToClear());
  };
};

export const getProducts = () => {
  return (dispatch) => {
    dispatch(setStateStockToFetching());
    doGetProducts(dispatch);
  };
};

export const addProduct = (formData, history) => {
  return async (dispatch) => {
    await httpClient.post(server.PRODUCT_URL, formData);
    history.goBack();
  };
};

export const updateProduct = (formData, history) => {
  return async (dispatch) => {
    await httpClient.put(server.PRODUCT_URL, formData);
    history.goBack();
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setStateStockToFetching());
      let result = await httpClient.get(`${server.PRODUCT_URL}/id/${id}`);
      dispatch(setStateStockToSuccess(result.data));
    } catch (error) {
      alert(JSON.stringify(error));
      dispatch(setStateStockToFailed());
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(setStateStockToFetching());
    await httpClient.delete(`${server.PRODUCT_URL}/id/${id}`);
    await doGetProducts(dispatch);
  };
};

export const getProductByKeyword = (event) => {
  return async (dispatch) => {
    var keyword = event.target.value;
    dispatch(setStateStockToFetching());

    if (keyword !== null && keyword !== "") {
      let result = await httpClient.get(
        `${server.PRODUCT_URL}/name/${keyword}`
      );
      dispatch(setStateStockToSuccess(result.data));
    } else {
      doGetProducts(dispatch);
    }
  };
};

const doGetProducts = async (dispatch) => {
  try {
    let result = await httpClient.get(server.PRODUCT_URL);
    dispatch(setStateStockToSuccess(result.data));
  } catch (err) {
    // alert(JSON.stringify(err));
    dispatch(setStateStockToFailed());
  }
};
