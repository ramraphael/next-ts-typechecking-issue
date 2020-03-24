Thank you for taking the time to look!

## The bug

- Notice how on `pageTwo.tsx`, there's an illegal value assignment. Running `yarn dev` does not catch this issue.
- Notice how on `index.tsx`, we are re-assigning a variable to a value of a different type than what it was initialized with. Once these lines are commented in, running `yarn dev` does not catch this issue.
