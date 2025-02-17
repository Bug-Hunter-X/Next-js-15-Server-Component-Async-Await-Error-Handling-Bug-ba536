The issue can be solved by wrapping the asynchronous operation within a `try...catch` block and explicitly returning an error object. This allows the client component to handle the error gracefully.

```javascript
// server-solution.js
export default async function Page() {
  try {
    const data = await fetchData();
    return (
      <div>
        <h1>Success!</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Error fetching data</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

async function fetchData() {
  // Simulate an error
  //throw new Error('Failed to fetch data'); 
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return await res.json();
}
```