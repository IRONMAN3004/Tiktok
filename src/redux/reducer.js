const initState = {
    filters: {
        search: '',
        status: 'ALL',
        priority: [],
    },
    todoList: [
        { id: 1, name: 'Learn Reactjs', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn PHP', completed: false, priority: 'High' },
        { id: 3, name: 'Learn Nodejs', completed: false, priority: 'Low' },
    ],
};

const rootReducer = (state = initState, action) => {
    console.log({ state, action });

    switch (action.type) {
        case 'todoList/addTodoAction': {
            console.log('ho');
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        }
        default:
        // console.log('Lỗi ròi');
    }
};

export default rootReducer;

/* 
  initState hiểu ở đây nó là giá trị khởi tạo của state mà 1 app của chúng ta có nhiều state
  nên cần lưu chúng vào array hoặc object để dễ quản lý thay vì tạo  nhiều state ở bên ngoài 
  trong trường hợp này mỗi key trong object initState tương đương với đại diện cho 1 state 
  và giá trị của key đấy chính là giá trị initialState(giá trị khởi tạo của state).
  không như các tạo state bình thường thì cần phải có setState để update state 
  khi ta dùng redux trong store sẽ có function reducer  kết hợp với action đc ditpath lên 
  sẽ làm thay đổi giá trị của state.Nên ở đây ta chỉ cần tạo tên state tương ứng với key và 
  xác định giá trọ khởi tạo của state đó thôi còn việc update state thì để reducer lo.
*/
