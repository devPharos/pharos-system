import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import { loginSuccess, loginFailure, refreshSuccess } from "./actions";

export function* login({ payload }) {
  try {
    const { email, password } = payload;
    const headerParams = {
      "username": `${email}`,
      "password": `${password}`,
      "grant_type": 'password'
    };

    const response = yield call(api.post, "/api/oauth2/v1/token?grant_type=password", {}, {headers: headerParams});

    const { access_token: token, refresh_token } = response.data;
    
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response2 = yield call(api.get, "/loggeduser");

    const user = response2.data;
    yield put(loginSuccess(token, user, refresh_token));

    history.push("/dashboard");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados.");

    yield put(loginFailure());
  }
}

export function* refresh_token({ payload }) {
  console.log('payload')
  try {
    const { refresh_token } = payload;

    const response = yield call(api.post, "/api/oauth2/v1/token?grant_type=refresh_token&refresh_token="+refresh_token);
    console.log(response)

    const { access_token: token, refresh_token: new_refresh_token } = response.data;
    console.log( { token,new_refresh_token })
    
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response2 = yield call(api.get, "/loggeduser");

    const user = response2.data;
    yield put(refreshSuccess(token, user, new_refresh_token));

    history.push("/dashboard");
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados.");

    yield put(loginFailure());
  }
}

export function logout() {
  history.push("/");
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/REFRESH_REQUEST", refresh_token),
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/LOGOUT", logout)
]);
