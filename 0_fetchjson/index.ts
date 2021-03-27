import axios from 'axios'

/**
 * Goal of TS Type System
 *   - Help us catch errors during development
 *   - Use type annotations to analize our code
 *   - Only active during development
 *   - Doesn't provide any performance optimization
 */


const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number,
  title: string,
  completed: boolean
}

axios.get(url).then(res => {
  const todo = res.data as Todo

// Error detected while writing code because of typescript
  // const id = todo.Id
  // const title = todo.Title
  // const finished = todo.finished

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

// Wrong order detected while writing code because of typescript
  // logTodo(id, completed, title)

  logTodo(id, title, completed)

})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of ${title}
  Is it finished? ${completed}
  `)
}