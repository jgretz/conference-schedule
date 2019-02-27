export const execute = (func, ...args) => (dispatch, store) => {
  func(dispatch, store, args);
};
