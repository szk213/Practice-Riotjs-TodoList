require('ui/todo')
var Todo = require('./domain/todo')

riot.mount('todo',{todo: new Todo()})