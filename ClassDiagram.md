# クラス図

```plant
@startuml
class Todo {
      - const String id
        + String name
          + String discription
            + boolean checked
              + check()
                + uncheck()
}

class TodoFactory {
      + new(String name, String discription)
}

class TodoRepository {
      + save(Todo todo)
        + delete(String id, Array<String> ids)
}

class TodoList {
      - const String id
        + Array<Todo> todos
          + String title
            + Todo add(Todo todo)
              + Todo update(Todo todo)
                + Todo getTodo(String id)
                  + Array<Todo> get()
                    + delete(String id, Array<String> ids)
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
TodoList --> TodoFactory
TodoList --> TodoRepository
TodoListService o-- TodoList
TodoListService --> TodoListFactory
TodoListService --> TodoListRepository
@enduml
```

![](http://www.plantuml.com/plantuml/png/fLBBRiCW4BpxA_P8bFWFAakzzDHJqn-Wi4fHNR1Waoggyk-1HTZKTg9AkHXszZ6pOrGlGu1tfntyDW0jA6S3mPwyiGSmEcBR4bdvZNMiJL3U36ISPVZ3kHwb1VM9wWjpAz_5Xkz7Mw9BqwYH-4KgSlxC_5km-2CgljqAsQp_3GSNJ3KYo1CANedY9tDhx95GZ7ljuDbxUNxAG1UHC1lxQg8Fjpt9xQcmOvfGEqE6-cmLov1Qp_LmU1oq95nD7P3IEGdUB5XZYNXakRk-hzJVzZbb7r6oHtyo2ddiQFr2K9NxmypM5Gdb3Vv722GbunJNjamm8MtRrGzqcPWSQUQhb6a9MoHBV_KNxjPCF5S0)
