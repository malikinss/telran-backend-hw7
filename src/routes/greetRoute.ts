// src/routes/greetRoute.ts

import { Router } from "express";
import { requestTime } from "../middlewares/requestTime.ts";
import { limitRequests } from "../middlewares/limitRequests.ts";
import { greetController } from "../controllers/greetController.ts";

// Create a router instance
const greetRouter: Router = Router();

// Define the /greet route with middlewares
greetRouter.post("/greet", requestTime, limitRequests, greetController);

export default greetRouter;
