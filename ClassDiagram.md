# クラス図

```plant
@startuml
class Todo {
    - const String id
    + String name
    + String description
    + boolean checked
    + check()
    + uncheck()
}

class TodoList {
    - const String id
    + Array<Todo> todos
    + String title
    + Todo create()
    + Todo save(Todo todo)
    + Todo getTodo(String id)
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
TodoListService o-- TodoList
TodoListService --> TodoListFactory
TodoListService --> TodoListRepository
@enduml
```

![](http://www.plantuml.com/plantuml/svg/fL71JiCm3BttAtpiDF87g18NJfmOFn1SQqIKU4hCq8JuTnAt2M4T28bBOpy_-psxEDaOuO57XlSEm02oZm8x2SxlmOq9svRCsnTgyz553EuWZht2ZymJMG_uHFXCSwl6_KRZLr-oZwx3Adpdak3FuZSXsDDr9WuWwHjR2-9acZtf2XZ82YroYaHxf5wZtDiKzYJvxQlOPgMMACkeaIPASoltQk7Dm92GU66fMul2uQIxRS7JMzySyWB_dWuSNTDIpUVgVvpiA1mTaewj9ryPQchVbFLqnKBvoNyn0jb9dSB6g41txgeKChOg6ZES7_HNpjSHFm40)
