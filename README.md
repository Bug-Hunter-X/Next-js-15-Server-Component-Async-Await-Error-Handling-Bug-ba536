## Next.js 15 Server Component Async/Await Error Handling Bug

This repository demonstrates a subtle bug in Next.js 15 related to error handling within `async/await` functions in server components.  When an error occurs during data fetching in a server component, it may not be caught properly, leading to a silent failure or unexpected rendering behavior. This example shows the issue and a possible solution.

### Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the unexpected behavior (or lack thereof).

### Solution
The solution involves using a `try...catch` block within the `async` function and returning a specific error object to be handled by the client. Refer to `server-solution.js` for a demonstrated fix.