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
  console.log(data);
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
