import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/';

interface StoreState {
  todos: Todo[];
}

export default function () {
  return combineReducers<StoreState>({
    todos: todosReducer,
  });
}
