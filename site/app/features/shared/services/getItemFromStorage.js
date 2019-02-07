export default key => {
  const json = localStorage.getItem(key);

  try {
    return JSON.parse(json);
  } catch (err) {
    console.error(err); // eslint-disable-line
    return null;
  }
};
