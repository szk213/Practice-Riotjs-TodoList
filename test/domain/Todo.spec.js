"use strict";
import Todo from "../../src/domain/Todo.js"

describe("Todo", function () {
    it("Todo作成時_getId_Idが返る", () => {
      let todo = new Todo();
      assert(todo.id);
    });

    it("Todo作成時_isChecked_falseが返る",  () => {
        let todo = new Todo();
        assert.equal(todo.isChecked(), false);
    });

    it("Todo作成時_getName_空文字が返る", () => {
        let todo = new Todo();
        assert.equal(todo.name, "");
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

    it('setName("Todo名")_nameがTodo名となる', () => {
        let todo = new Todo();
        todo.name ='Todo名';
        assert.equal(todo.name, 'Todo名');
    });
});