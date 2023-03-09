export const getLocalStorage = (getTarget, elseItem) => {
  const localFilter = localStorage.getItem(getTarget);

  return localFilter ? JSON.parse(localFilter) : elseItem;
};
