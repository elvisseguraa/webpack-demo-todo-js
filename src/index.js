import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );


// const tarea1 = new Todo( 'Aprender JavaScript' );
// // const tarea2 = new Todo( 'Comprar un unicornio' );

// todoList.nuevoTodo( tarea1 );
// // todoList.nuevoTodo( tarea2 );

// console.log( todoList );

// crearTodoHtml( tarea1 );



// localStorage.setItem('mi-key', 'AAAAAAAAAa1');

// // setTimeout(() => {
// //     localStorage.removeItem('mi-key')
// // }, 1500 );

// sessionStorage.setItem('mi-key', 'AAAAAAAAAa2');

