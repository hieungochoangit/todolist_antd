const initialState = {
  filters: {
    search: '',
    status: '',
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
    default:
      return state;
  }
}

export default rootReducer;
