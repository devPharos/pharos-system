import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  const {
    nome,
    email,
    avatar_id,
    language,
    id,
    oldEmail,
    avatar,
    filialDefault,
    ...rest
  } = payload.data;
  let data = {};

  try {
    if (avatar_id && avatar_id !== "undefined") {
      const { data2 } = yield call(api.get, `s3files/${avatar_id}`);
      data = data2;
    }

    const profile = Object.assign(
      {
        nome,
        email,
        avatar_id,
        id,
        oldEmail,
        avatar: data,
        filialDefault
      },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "users", profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    switch (err.response.data.error) {
      case "email-already-used":
        break;
      case "user-does-not-exist":
        break;
      case "passwords-do-not-match":
        break;
      case "wrong-password":
        break;
      default:
    }
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
