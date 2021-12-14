const productsReducer = (state = { products: [] }, action) => {
  if (action.type === "ADD_PRODUCTS") {
    return { ...state, products: [...action.data] };
  }
  if (action.type === "REMOVE_PRODUCTS") {
    return { ...state, products: [...action.data, ...state.products] };
  }
  return state;
};

export default productsReducer;
