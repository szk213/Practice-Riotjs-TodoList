# クラス図

```plant
@startuml
class Todo {
  - const String _id
  - String _text
  - boolean _check
  + check()
  + uncheck()
}

class TodoList {
  - const String id
  - Array<Todo> todos
  - String name
  + Todo create()
  + Todo save(Todo todo)
  + Todo getTodo(String id)
  + void delete(String id)
  + void delete(Array<String> ids)
  + IteratorResult next() 
}

class TodoListFactory {
  + new(String name)
}

class TodoListRepository {
  + save(TodoList)
  + delete(String id, Array<String> ids)
}

class TodoListService {
  TodoList new(String name)
  TodoList save(TodoList todoList)
  boolean delete(String id, Array<String> ids) 
}

TodoList o-- Todo
TodoListService o-- TodoList
TodoListService --> TodoListFactory
TodoListService --> TodoListRepository
@enduml
```

![](http://www.plantuml.com/plantuml/svg/ZL51JiCm4Bpd5NjqLVm358aB4XAdbdjbd5Mn23Qoju4AyNViTMrC4bLSalNEU6PshKSL0ZovmS5N1o11Eni8zkIDFSB13DmiHy9FuiQpSoCg2mVzWlerjhR0bTXmVRBbzDrrkbeycYYzOdDnkVDUdMyJiGUAtz1wM_M6hCrPjKT5U77ZJb0J2gxIrGOu8gM_g5uPcvmPOC0HeymLA6VAX3uoGgOy47f5pkymd4O26_SYDh2Szbxfo3hpqDj8-n3DE2lRsU6x2wQvKiTAQFQUXxw1bP0BvJtwoMXasVeMYq0DziUPbreYbCV_Jn3UILLnKh91DqzLWDHRW5BsyuLUvVmkyGS0g)
