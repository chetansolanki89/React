export const productsReducer = (
  state = { products: [], cart: [], selected: [], group: [] },
  action
) => {
  // let grouped = {};

  if (action.type === "LOAD_PRODUCTS")
    return { ...state, products: [...action.data] };
  // return { ...state, products: [...state.products, ...action.data] };
  if (action.type === "SELECTED_PRODUCT")
    return { ...state, selected: action.data };
  if (action.type === "ADD_TO_CART") {
    // return {
    //   ...state,
    //   cart: [...state.cart, { data: action.data, key: state.cart.length }],
    // };

    // state.cart.forEach((elem) => {
    //   if (elem === action.data.name) {
    //     grouped[elem] = grouped[elem] + 1;
    //   } else {
    //     grouped[action.data.name] = 1;
    //   }
    //   // grouped[elem] = grouped[action.data] ? grouped[elem] + 1 : 1;
    // });

    // return {
    //   ...state,
    //   cart: [...state.cart,
    //     grouped[action.data]
    //       ? grouped[action.data] + 1
    //       : (grouped[action.data] = 1),
    //   ],
    // };

    return { ...state, cart: [...state.cart, action.data] }; //My code
  }

  if (action.type === "REMOVE_PRODUCT") {
    const filtered = state.cart.filter((item) => item !== action.data);
    return { ...state, cart: [...filtered] };
  }
  return state;
};
