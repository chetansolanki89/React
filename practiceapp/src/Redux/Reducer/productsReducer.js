export const productsReducer = (
  state = { products: [], cart: [], removed: [], selected: [] },
  action
) => {
  if (action.type === "LOAD_PRODUCTS")
    return {
      ...state,
      products: [...action.data, ...state.products],
    };
  if (action.type === "SELECTED_PRODUCT")
    return { ...state, selected: [action.data] };
  if (action.type === "REMOVE_PRODUCT") {
    const filteredProducts = state.cart.filter((item) => item !== action.data);
    return {
      ...state,
      cart: filteredProducts,
      removed: [...state.removed, action.data],
    };
  }
  if (action.data === "ADD_PRODUCT")
    return { ...state, cart: [...state.cart, action.data] };
  return state;
};
