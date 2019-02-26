export const loadSessionDetail = (dispatch, store, session) => {
  if (!session) {
    return;
  }

  const detail = {
    description: session.description,
  };

  return detail;
};
