// Action creators
export const addTodoAction = (data) => {
  return {
    type: 'addTodo',
    payload: data,
  }
}

export const searchValueAction = (data) => {
  return {
    type: 'filterSearchValue',
    payload: data,
  }
}

export const statusValueAction = (data) => {
  return {
    type: 'filterStatusValue',
    payload: data,
  }
}

export const levelValueAction = (data) => {
  return {
    type: 'filterLevelValue',
    payload: data,
  }
}

export const checkedTodo = (checkedStatus, index) => {
  return {
    type: 'checkedTodo',
    payload: {
      checked: checkedStatus,
      index: index
    },
  }
}

export const removeTodo = (id) => {
  return {
    type: 'removeTodo',
    payload: id,
  }
}
