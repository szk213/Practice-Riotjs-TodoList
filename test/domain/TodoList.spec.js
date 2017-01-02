"use strict";
import TodoList from "domain/TodoList.js"

describe('TodoList', () => {
    describe('作成時', () => {
        it('idの指定なし_getId()_idを取得', () => {
            let todoList = new TodoList();
            assert(todoList.getId());
        });

        it('idにundefinedを指定_getId()_idを取得', () => {
            let todoList = new TodoList(undefined);
            assert(todoList.getId());
        });

        it('getName()_undefinedを取得', () => {
            let todoList = new TodoList();
            assert.equal(todoList.getName(), undefined);
        });

        it('getTodos()_todosArrayを取得', () => {
            let todoList = new TodoList();
            assert(Array.isArray(todoList.getTodos()));
        });
    });
});