# 4.1-Andrea-Rethy

[![Test](https://github.com/AndreaRethy/4.1-Andrea-Rethy/actions/workflows/main.yml/badge.svg)](https://github.com/AndreaRethy/4.1-Andrea-Rethy/actions/workflows/main.yml)

## How the API works

The default port is set to be 1234, if you use a different port change the port number.

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

You can edit either the status or the name of any item based on the id number. To test this copy a valid id number when doing the GET request.

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

Just the id is needed.  To test this copy a valid id number when doing the GET request.

```
DELETE http://localhost:1234/todo/c4b2eb63-60ae-44ea-a6e2-52666a0c3a0f
```

The program will give a feedback if it was successful:

```
{
  "message": "Task deleted"
}
```

## How to test the API

1. Make sure you have the extension REST Client installed:

```
Name: REST Client
Id: humao.rest-client
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
```

2. Open the project folder in your terminal and start the server with the following command:
```
npx tsc
```
```
npm run start
```

3. Open the ./RESTClient/api.http file and click on "Send request" on the request you want to test. Feel free to change the example data.
