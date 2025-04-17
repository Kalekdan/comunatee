export async function getComunatees() {
  const res = await fetch("http://localhost:8080/api/comunatee");
  return await res.json();
}

export async function createComunatee(comunatee) {
  const res = await fetch("http://localhost:8080/api/comunatee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comunatee),
  });
  return await res.json();
}
