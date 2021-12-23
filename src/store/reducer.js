const initialState = {
  filters: {
    search: '',
    status: '',
    level: [],
  },
  todo: [],
}

const rootReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todo: [...state.todo, action.payload],
      }
    default:
      return state;
  }
}

export default rootReducer;
