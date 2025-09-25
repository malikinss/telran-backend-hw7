// src/index.ts

import express from "express";
import greetRouter from "./routes/greetRoute.ts";
import statusRouter from "./routes/statusRoute.ts";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the greet and status routers
app.use("/api", greetRouter);
app.use("/api", statusRouter);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
