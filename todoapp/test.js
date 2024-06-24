const array = [{ id: 1, data: 'test1' }, { id: 11, data: 'test1' }, { id: 111, data: 'test1' }, { id: 1111, data: 'test1' }];
console.log(array);
array.map((val) => {
    (val == 2 ? 22 : val)
})
const todo = { id: 1, data: 'new' }
console.log(array.map((prevTodo) => prevTodo.id === 1 ? { ...prevTodo, active: false } : prevTodo)
);

console.log(array.filter((todo) => todo.id != 11));

console.log(Date.now());