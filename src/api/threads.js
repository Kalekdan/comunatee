export async function getThreads() {
  const res = await fetch("http://localhost:8080/api/threads");
  return await res.json();
}

export async function createThreads(threads) {
  const res = await fetch("http://localhost:8080/api/threads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(threads),
  });
  return await res.json();
}