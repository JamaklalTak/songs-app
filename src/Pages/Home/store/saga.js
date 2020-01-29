import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// import file from '../../../Mocks/data.json';

import {
  actions,
  saveData
} from './actions';

function* fetchDataWorker({ requestBody }) {
  try {
    let url = ''
    if(requestBody){
      url = `https://itunes.apple.com/search?term="${requestBody}"`;
    } else {
      url = `https://itunes.apple.com/search?term=""`;
    }
    const { data } = yield axios.get(url);
    if(data){
      yield put(saveData(data.results));
    }
  } catch (error) {
      console.log('Error: ', error);
  }
}

export function* fetchDataWatcher() {
  yield takeLatest(actions.GET_DATA, fetchDataWorker);
}