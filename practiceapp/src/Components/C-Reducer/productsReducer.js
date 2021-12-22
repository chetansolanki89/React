export const productsReducer = (
  state = { products: [], cart: [], selected: []},
  action
) => {
  if (action.type === "LOAD_PRODUCTS")
    return { ...state, products: [...action.data] };
    // return { ...state, products: [...state.products, ...action.data] };
  if (action.type === "SELECTED_PRODUCT")
    return { ...state, selected: action.data };
  if (action.type === "ADD_TO_CART")
    return { ...state, cart: [...state.cart, action.data] };
  if (action.type === "REMOVE_PRODUCT") {
    const filtered = state.cart.filter((item) => item !== action.data);
    return { ...state, cart: [...filtered] };
  }
  return state;
};
