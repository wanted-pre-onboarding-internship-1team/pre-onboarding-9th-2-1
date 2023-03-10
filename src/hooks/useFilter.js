import { useReducer } from 'react';

const filterReducer = (data, action) => {
  const { targetData, filtered, range, check } = action;

  switch (action.type) {
    case 'CHECK':
      if (!!check.length) {
        targetData.filter(item => check.includes(item.spaceCategory));
      }
      return targetData;
    case 'RANGE':
      if (!!range.length) {
        return targetData.filter(
          item => item.price >= range[0] && item.price <= range[1]
        );
      }
      return targetData;
    case 'MULTI':
      let result = filtered;

      if (!!check.length) {
        result = result.filter(item => check.includes(item.spaceCategory));
      }
      if (!!range.length) {
        result = result.filter(
          item => item.price >= range[0] && item.price <= range[1]
        );
      }
      return result;
    case 'ALL':
      return filtered;
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useFilter = filter => {
  const [response, dispatch] = useReducer(filterReducer, []);

  const checkFilter = targetData => {
    const { check } = filter;

    dispatch({ type: 'CHECK', targetData, check });
  };

  const rangeFilter = targetData => {
    const { range } = filter;

    dispatch({ type: 'RANGE', targetData, range });
  };

  const multiFilter = targetData => {
    const { range, check } = filter;
    let filtered = [...targetData];

    if (!check.length && !range.length) {
      dispatch({ type: 'ALL', filtered });
      return;
    }

    dispatch({ type: 'MULTI', filtered, range, check });
  };

  return [response, { checkFilter, rangeFilter, multiFilter }];
};
