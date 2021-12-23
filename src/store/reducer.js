const initialState = {
  filters: {
    search: '',
    status: '',
    level: [],
  },
  todo: [],
}

const rootReducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todo: [...state.todo, action.payload],
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
