# 4.1-Andrea-Rethy

## How the API works

The default port is srt to be 1234, if you use a different port change the port number.

### To list all items in the todo list:

```
http://localhost:1234/todo
```

Example output:

```
[
    {
        "id": "4b196eb2-7292-4c44-bc53-c6b367b4a0f1",
        "task": "clean house",
        "status": "to-do"
    },
    {
        "id": "c4b2eb63-60ae-44ea-a6e2-52666a0c3a0f",
        "task": "practice coding",
        "status": "done"
    },
    {
        "id": "11b6d2f1-917a-4071-b21f-c30eebda6e85",
        "task": "walk the dog",
        "status": "done"
    }
]
```



### Add a new item

Only add the task name, the rest is auto-filled.

Example: 

```
POST http://localhost:1234/new-task
Content-Type: application/json

{
    "task": "Entregar API"
}
```


This should give an example output:

```
{
  "id": "8d3c676d-8684-434a-8834-0fa255257430",
  "task": "Entregar API",
  "status": "to-do"
}
```


### Edit an item

You can edit either the status or the name of any item based on the id number.

Example request:

```
PATCH http://localhost:1234/todo/4b196eb2-7292-4c44-bc53-c6b367b4a0f1
Content-Type: application/json

{
    "status": "done"
}
```


Example output:

```
{
  "id": "4b196eb2-7292-4c44-bc53-c6b367b4a0f1",
  "task": "clean house",
  "status": "done"
}
```



### Delete an item

Just the id is needed:

```
DELETE http://localhost:1234/todo/c4b2eb63-60ae-44ea-a6e2-52666a0c3a0f
```

The program will give a feedback if it was successful:

```
{
  "message": "Task deleted"
}
```
