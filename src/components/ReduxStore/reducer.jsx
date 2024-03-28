import { INCREMENT, DECREMENT, LOGIN, LOGOUT,ROLESET } from './actions'; // Assuming LOGIN and LOGOUT action types

const initialState = {
  count: 0,
  isAuthenticated: false,
  role:""
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true, 
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false, 
      };
      case ROLESET:
        return {
          ...state,
          role: action.payload,
        };
    default:
      return state;
  }
};

export default counterReducer;
