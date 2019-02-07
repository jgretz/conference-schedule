export default (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};
