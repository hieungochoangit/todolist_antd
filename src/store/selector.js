export const todoSelector = (state) => {
  const newState = state;
  const newTodo = newState.todos.filter(todo => {

    if (state.filters.status === 'all') {
      return todo.name.includes(state.filters.search) && !state.filters.level.includes(todo.level);
    }

    if (state.filters.status === 'completed') {
      return todo.name.includes(state.filters.search) && todo.isCompleted === true;
    }

    if (state.filters.status === 'pending') {
      return todo.name.includes(state.filters.search) && todo.isCompleted === false;
    }

    return todo.name.includes(state.filters.search);

  });
  return newTodo;
}