function login(id, password) {
  return (dispacth, getState) => {
    dispacth({ type: 'LOGIN_SUCCESS', payload: { id, password } });
  };
}

export const authenticateAction = { login };
