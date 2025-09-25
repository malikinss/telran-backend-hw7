// src/routes/statusRoute.ts

import { Router } from "express";
import { requestTime } from "../middlewares/requestTime.ts";
import { statusController } from "../controllers/statusController.ts";

// Create a router instance
const statusRouter: Router = Router();

// Define the /status route with middlewares
statusRouter.get("/status", requestTime, statusController);

export default statusRouter;
