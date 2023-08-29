const CHECK = 'bookstore/categories/CHECK';

const categoriesReducer = (state = [], action) => {
  const reducerMap = {
    CHECK: () => 'Under construction',
  };

  const reducerFunction = reducerMap[action.type];
  return reducerFunction ? reducerFunction() : state;
};

const checkStatus = () => ({ type: CHECK });

export { categoriesReducer, checkStatus };
