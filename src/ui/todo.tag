import Todo from '../domain/Todo';

<todo>
    <input type="checkbox" checked={ todo.isChecked(); }>
    <div>{ todo.getText(); }</div>

    <script>
    this.todo = opts.todo || new Todo();
    this.mixin(Todo);
    </script>
</todo>
