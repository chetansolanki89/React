const productsReducer = (state = { products: [] }, action) => {
  if (action.type === "ADD_PRODUCTS") {
    return { ...state, products: [...action.data] };
  }
  if (action.type === "REMOVE_PRODUCTS") {
    const filtered = state.products.filter((item) => item !== action.data);
    console.log("Filtered: ", filtered);
    console.log("Remove :", action.data);
    return { ...state, products: [...filtered] };
  }
  if (action.type === "SELECTED_PRODUCT") {
    return { ...state, selected: action.data };
  }
  return state;
};

export default productsReducer;
