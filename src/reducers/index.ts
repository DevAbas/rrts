import { combineReducers } from 'redux';

export default function () {
  return combineReducers({
    counter: () => 1,
  });
}
