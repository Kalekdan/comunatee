# Built using pnpm

To build and run locally:

### `pnpm install`

### `pnpm start`

## Latest build currently hosted at https://comunatee.netlify.app/ (no longer maintained due to lack of support for sprnig backend, no hosted version currently exists)

# Backend
The backend is built using spring - to run it, navigate to the /backend directory and run `./gradlew bootRun`

# Comunatee

## Key Objects
### Comments
Each post has an array of 'threads' which make up the comments section. The postId is the id of the post, and the ids in the threads array are the top level 'comments' of each of the threads.
``` JSON
[
  {
    "postId": "d4da88f1-27ac-4df1-8aa8-0053eeece83e",
    "threads": [
      "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
      "f9dddb43-4219-455d-a2ae-b095b97fb8c4",
      "3ee9f655-5056-41fa-8d38-496c3ec8964c",
      "8e89de3c-6843-459f-8445-efea7028a28f"
    ]
  }
]
```
### Threads
Each thread is a response to a post. The comment id is a unique id for the comment. The parent comment is the comment above it in the thread. Where this is null, this is the top comment in the thread, and should have a reference to it in a posts 'comments' object.
``` JSON
[
  {
    "commentId": "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
    "parentComment": null,
    "content": "that is a cute dog",
    "op": "bob_smith"
  },
  {
    "commentId": "d4c9db76-9f78-48ef-8d97-ab4b927f2c90",
    "parentComment": "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
    "content": "it certainly is",
    "op": "bob_smith"
  }
]
```
