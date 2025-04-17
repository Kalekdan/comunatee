export async function getPosts() {
  const res = await fetch("http://localhost:8080/api/posts");
  return await res.json();
}

export async function createPosts(post) {
  const res = await fetch("http://localhost:8080/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return await res.json();
}