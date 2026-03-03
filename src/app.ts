// import express,{ Application } from "express";

import express, { Application, Request, Response } from "express";

const port = 5000;
const app: Application = express();



// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

export default app;