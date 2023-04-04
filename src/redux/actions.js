export const addTodoAction = (data) => {
    return {
        type: 'todoList/addTodoAction',
        payload: data,
    };
};

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    };
};
