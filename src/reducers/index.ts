import { combineReducers, Reducer } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions/';

export interface StoreState {
  todos: Todo[];
}

export const reducers: Reducer<StoreState> = combineReducers<StoreState>({
  todos: todosReducer,
});
