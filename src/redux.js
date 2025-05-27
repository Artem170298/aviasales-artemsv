// eslint-disable-next-line default-param-last
const reducer = (state = 0, action) => {
  //   if (action.type === 'INC') {
  //     return state + 1;
  //   }
  //   if (state === undefined) {
  //     return 0;
  //   }

  switch (action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
};

let state = reducer(undefined, {});

state = reducer(state, { type: 'INC' });
console.log(state);

state = reducer(state, { type: 'INC' });
console.log(state);
