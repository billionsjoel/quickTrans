const ADD_FAKE = 'fake/users';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAKE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
