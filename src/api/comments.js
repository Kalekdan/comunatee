export async function getComments() {
    const res = await fetch('http://localhost:8080/api/comments');
    return await res.json();
  }
  
  export async function createComments(comments) {
    const res = await fetch('http://localhost:8080/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comments)
    });
    return await res.json();
  }