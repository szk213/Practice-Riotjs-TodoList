import Todo from '../../src/domain/Todo.js'

describe('TodoTag', function() {
    let todo;
    before(function() {
        // create Todo
        todo = new Todo();
        // create mounting points
        let html = document.createElement('todo');
        document.body.appendChild(html)
    });

    it('mounts todo tag', function() {
        riot.mount('todo', {todoObj:todo});
        assert.equal(document.querySelector('todo > input').checked, false);
    });

    it('todoObjのcheckがtrueの場合、todoのcheckがtrue', () => {
        todo.check();
        riot.mount('todo', {todoObj: todo});
        assert.equal(document.querySelector('todo > input').checked, true);
    });

    it('todoObjのcheckがfalseの場合、todoのcheckがfalse', () => {
        todo.unCheck();
        riot.mount('todo', {todoObj: todo});
        todo.check();
        assert.equal(document.querySelector('todo > input').checked, false);
    });

    it('todoObj.nameが"todo名前"の場合、todoのnameが"todo名前"', () => {
        todo.name = 'todo名前';
        riot.mount('todo', {todoObj: todo})
        assert.equal(document.querySelector('todo > div').textContent, 'todo名前');
    });
});
