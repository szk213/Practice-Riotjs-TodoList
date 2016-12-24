"use strict"
import uuid from 'uuid/v4'

export default class TodoList {
    constructor(id = uuid()) {
        this._id = id;
        this._todos = [];
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    [Symbol.iterator]() {
        return this._todos.values()
    }
}