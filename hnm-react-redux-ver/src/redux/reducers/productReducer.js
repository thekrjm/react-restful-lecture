const initialState = {
  productList: [],
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === 'GET_PRODUCT_SECCESS') {
    return {
      ...state,
      productList: payload.data,
    };
  } else {
    return { ...state };
  }
}

export default productReducer;
