import { takeEvery } from 'redux-saga/effects';
import getBetsSaga from './getBetsSaga';


export default function* rootSaga() {

    yield takeEvery('GET_BETS',getBetsSaga);
}