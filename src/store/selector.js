export const todoSelector = (state) => {
  const newState = state;
  const newTodo = newState.todos.filter(todo => {
    return todo.name.includes(state.filters.search);
  });
  return newTodo;
}