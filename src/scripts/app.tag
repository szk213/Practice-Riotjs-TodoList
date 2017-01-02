import Todo from '../domain/Todo';
import '../ui/todo';

<app>
  <todo></todo>

  <script>
    let todo = new Todo();
    todo.setText('aaa');
    riot.mount('todo', todo);
  </script>
</app>