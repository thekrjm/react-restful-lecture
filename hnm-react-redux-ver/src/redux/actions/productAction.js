function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    const url = `http://localhost:3004/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log('데이터', data);
    dispatch({ type: 'GET_PRODUCT_SECCESS', payload: { data } });
  };
}

export const productAction = { getProducts };
