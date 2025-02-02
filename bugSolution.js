The solution involves using promises or async/await to properly handle asynchronous operations:

```javascript
// Correct asynchronous handling with async/await
async function getUsers(){
  const snapshot = await db.ref('users').once('value');
  const users = snapshot.val();
  console.log('Users:', users); // users will be defined here
  return users;
}

// ...later in the code...
async function someFunction(){
  const users = await getUsers();
  console.log('Users in function:', users); // No error here
}

// Using .then().catch() method
db.ref('users').once('value').then((snapshot) => {
    const users = snapshot.val();
    console.log('Users:', users);
    // Perform operations using users
}).catch((error) => {
    console.error(error);
});
```
By using async/await or promises, we ensure that the code waits for the data to be fetched before proceeding, preventing the undefined variable error.