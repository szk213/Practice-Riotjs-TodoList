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

TodoFactory ..>Todo
TodoList o-- Todo
TodoListService ..> Todo
TodoListService --> TodoFactory
TodoListService o-- TodoList
TodoListService --> TodoListFactory
TodoListService --> TodoListRepository
@enduml
```

![](http://www.plantuml.com/plantuml/svg/fLBBRiCW4BpxA_P8b90lg2prqbDFJNw0mYf5TS62JQeeoh-NXt287r6bN6nszZ73iB8JtiFUAWkN1e23jCOJxCXfSm2j0hOkaH4_MCTAU-bqJzgQ17zQsw4m8BzGVcDkJMUsIkUZAT6rQUH0_2OaMNTE_6im-CigliqCsQZ_0tlhTJN2YnEoT2KAdyoji4D2Djnh0w_EYVDB1jg0-D7OTnryMFOajyV2Dj7usXdIr6MhaWoXr5XF2e-z4eIpgGDI_Dy4hoQieOGzSxc7li_KB_iSiyyesQ4xQObfx63zH52LksDErXK9PGV_8mIYade3jzisXiqmsN8ETqXH6Yhd4votzL9FycLYn1QRgzTvM7DxaJy0)
