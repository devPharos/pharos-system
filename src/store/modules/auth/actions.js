export function loginRequest(email, password) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: { email, password }
  };
}

export function loginSuccess(token, user, refresh_token) {
  return {
    type: "@auth/LOGIN_SUCCESS",
    payload: { token, user, refresh_token }
  };
}

export function loginRefresh(token, user, refresh_token) {
  return {
    type: "@auth/REFRESH_REQUEST",
    payload: { token, user, refresh_token }
  };
}

export function refreshSuccess(token, user, refresh_token) {
  return {
    type: "@auth/REFRESH_SUCCESS",
    payload: { token, user, refresh_token }
  };
}

export function loginFailure() {
  return {
    type: "@auth/LOGIN_FAILURE"
  };
}

export function registerRequest(nome, email, password) {
  return {
    type: "@auth/REGISTER_REQUEST",
    payload: { nome, email, password }
  };
}

export function registerFailure(nome, email, password) {
  return {
    type: "@auth/REGISTER_REQUEST",
    payload: { nome, email, password }
  };
}

export function logout() {
  return {
    type: "@auth/LOGOUT"
  };
}
