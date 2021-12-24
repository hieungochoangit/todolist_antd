const initialState = {
  filters: {
    search: '',
    status: 'all',
    level: [],
  },
  todos: [
    {
      id: 1,
      name: 'html',
      isCompleted: false,
      level: 'medium',
    },
    {
      id: 2,
      name: 'css',
      isCompleted: false,
      level: 'low',
    }
  ],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'filterSearchValue':
      return {
        ...state,
        filters: {...state.filters, search: action.payload}
      }
    case 'filterStatusValue':
      return {
        ...state,
        filters: {...state.filters, status: action.payload}
      }
    case 'filterLevelValue':
      return {
        ...state,
        filters: {...state.filters, level: action.payload}
      }
    case 'removeTodo':
      const newTodo = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos: [...newTodo]
      }
    case 'checkedTodo':
      const newTodos = state.todos;
      const todoChange = newTodos[action.payload.index];
      todoChange.isCompleted = !newTodos[action.payload.index].isCompleted;

      return {
        ...state,
        todos: [...newTodos]
      }
    default:
      return state;
  }
}

export default rootReducer;
