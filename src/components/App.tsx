import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers/';

const App: React.FC = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const todos = useSelector<StoreState, Todo[]>(
    (state: StoreState) => state.todos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length > 0) {
      setFetching(false);
    }
  }, [todos]);

  const onClickFetchButton = (): void => {
    setFetching(true);
    dispatch(fetchTodos());
  };

  const renderTodoList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => dispatch(deleteTodo(todo.id))}>
        {todo.title}
      </div>
    ));
  };

  return (
    <div>
      <button onClick={onClickFetchButton}>FETCH</button>
      {fetching ? 'LOADING...' : null}
      {todos && renderTodoList()}
    </div>
  );
};

export default App;
