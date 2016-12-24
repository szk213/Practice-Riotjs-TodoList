"use strict";
import Todo from "domain/Todo.js"

describe("Todo", function () {
    it("Todo作成時_getId_Idが返る", () => {
      let todo = new Todo();
      assert(todo.getId());
    });

    it("Todo作成時_isChecked_falseが返る",  () => {
        let todo = new Todo();
        assert.equal(todo.isChecked(), false);
    });

    it("Todo作成時_getText_空文字が返る", () => {
        let todo = new Todo();
        assert.equal(todo.getText(), "");
    });

    it("checkがfalseの場合_check_checkがtrueとなる", () => {
        let todo = new Todo();
        todo.check();
        assert.equal(todo.isChecked(), true);
    });

    it("checkがtrueの場合_unCheck_checkがfalseとなる", () => {
        let todo = new Todo();
        todo.check();
        todo.unCheck();
        assert.equal(todo.isChecked(), false);
    });

    it('setText("Todo名")_textがTodo名となる', () => {
        let todo = new Todo();
        todo.setText('Todo名');
        assert.equal(todo.getText(), 'Todo名');
    });
});