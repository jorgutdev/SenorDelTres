/************************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to sagas/index.js
 *  - This template uses the api declared in sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import { call, put } from "redux-saga/effects";
import LoginActions from "../Redux/LoginRedux";
import firebase from "react-native-firebase";

// import { LoginSelectors } from '../Redux/LoginRedux'

export function* getLogin(action) {
  // const { data } = action;
  // get current data from Store
  // const currentData = yield select(LoginSelectors.getData)
  // make the call to the api
  // const response = yield call(api.getlogin, data);
  console.log("WOWOW", action);
  
  firebase.app().database()
    .ref("metadata")
    .on("value", snapshot => {
      console.log(snapshot.val());
    });

  // success?
  // if (response.ok) {
  //   // You might need to change the response here - do this with a 'transform',
  //   // located in ../Transforms/. Otherwise, just pass the data back from the api.
  //   debugger;

  //   yield put(LoginActions.loginSuccess(response.data));
  // } else {
  //   yield put(LoginActions.loginFailure());
  // }
}
