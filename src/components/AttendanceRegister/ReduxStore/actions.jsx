// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGIN='LOGIN'
export const LOGOUT='LOGOUT'
export const ROLESET=''
export const loginuser = () => ({
  type: LOGIN,
});
export const roleset = (role) => ({
  type: ROLESET,
  payload: role, // The role value that you're passing when dispatching
});
export const logoutuser = () => ({
  type: LOGOUT,
});
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
