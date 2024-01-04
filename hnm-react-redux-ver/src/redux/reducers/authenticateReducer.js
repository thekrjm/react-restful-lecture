const initialState = {
  id: '',
  password: '',
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  const { type, payload } = action;
  if (type === 'LOGIN_SUCCESS') {
    return {
      ...state,
      id: payload.id,
      password: payload.password,
      authenticate: true,
    };
  } else {
    return {
      ...state,
    };
  }
}

export default authenticateReducer;
