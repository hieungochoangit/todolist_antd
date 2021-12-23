// Action creators
export const addTodo = (data) => {
  console.log(data);

  return {
    type: 'addTodo',
    payload: data,
  }
}
