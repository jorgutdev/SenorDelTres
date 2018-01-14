import { call, put } from "redux-saga/effects";
import SettingsActions from "../Redux/SettingsRedux";
// import { SettingsSelectors } from '../Redux/SettingsRedux'

export function* getSettings(api, action) {
  const { data } = action;
  // get current data from Store
  // const currentData = yield select(SettingsSelectors.getData)
  // make the call to the api
  const response = yield call(api.getsettings, data);

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(SettingsActions.settingsSuccess(response.data));
  } else {
    yield put(SettingsActions.settingsFailure());
  }
}
