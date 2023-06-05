import axios from 'axios';

export async function fetchTodos() {
  try {
    const response = await axios.get('https://6264fc9e94374a2c506bde51.mockapi.io/todos');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(title) {
  try {
    const response = await axios.post('https://6264fc9e94374a2c506bde51.mockapi.io/todos', {
      title,
      completed: false,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(todoId, updates) {
  try {
    const response = await axios.put(`https://6264fc9e94374a2c506bde51.mockapi.io/todos/${todoId}`, updates);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(todoId) {
  try {
    await axios.delete(`https://6264fc9e94374a2c506bde51.mockapi.io/todos/${todoId}`);
    console.log('Todo deleted');
  } catch (error) {
    console.log(error);
  }
}