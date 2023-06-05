import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api.js';

(async () => {
  const todos = await fetchTodos();
  console.log('Existing todos:', todos);

  const newTodo = await createTodo('LoremIpsum');
  console.log('New todo has been created:', newTodo);

  const updatedTodo = await updateTodo(newTodo.id, { completed: true });
  console.log('Todo was updated:', updatedTodo);

  await deleteTodo(updatedTodo.id);
})();