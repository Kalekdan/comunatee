# Built using pnpm

To build and run locally:

### `pnpm install`

### `pnpm start`

## Latest build currently hosted at https://comunatee.netlify.app/

# Comunatee

## Comments/Threads
Top level comments for each post are stored in `comments.json` which point to each of the threads in `threads.json`

Threads are stored in a format such as the following. Where `parentComment` is null, this should be a top level comment and be referenced from `comments.json`.
``` JSON
[
    {
        "commentId": "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
        "parentComment": null,
        "content": "that is a cute dog",
        "op": "kalekdan"
    },
    {
        "commentId": "d4c9db76-9f78-48ef-8d97-ab4b927f2c90",
        "parentComment": "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
        "content": "it certainly is",
        "op": "jamesiam"
    }
]
```
