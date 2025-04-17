export async function getUsers() {
    const res = await fetch('http://localhost:8080/api/users');
    return await res.json();
  }
  
  export async function createUser(user) {
    const res = await fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return await res.json();
  }