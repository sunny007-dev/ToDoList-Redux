// let nextTodoId = 0;
export const addItems = (item) => {
    return ({
        type: "ADD_TODO",
        payload: {
          id: new Date().getTime().toString(),
          data: item
        }
    })
}


export const deleteItems = (i) => {
    return {
      type: 'DELETE_TODO',
      payload: i,
    };
  }