
Post Message Works, Message is Persisted in DB
```graphql

mutation AddMessageMutation {
    postMessage(message: {author: "stefi", content:"Hello, Robi"}){
        id
        author{username}
        content
        recipient{username}
    }
}
```


Managed to display  Message Events from the Server.
When a Message is Posted, it is received on the Client

```graphql
subscription NewMessagePosted {
    messageCreated {
        id
        content
        recipient{username}
        author{username}
    }
}
```
