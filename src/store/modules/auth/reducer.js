import produce from "immer";

const INITIAL_STATE = {
  token: null,
  refresh_token: null,
  user: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/LOGIN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/REFRESH_REQUEST": {
        draft.token = action.payload.token;
        draft.refresh_token = action.payload.refresh_token;
        draft.loading = true;
        break;
      }
      case "@auth/REFRESH_SUCCESS": {
        draft.token = action.payload.token;
        draft.refresh_token = action.payload.refresh_token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@auth/LOGIN_SUCCESS": {
        draft.token = action.payload.token;
        draft.refresh_token = action.payload.refresh_token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case "@auth/LOGIN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@auth/LOGOUT": {
        draft.token = null;
        draft.signed = false;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
