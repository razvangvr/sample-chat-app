
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
