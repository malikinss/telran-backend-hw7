// src/middlewares/limitRequests.ts

import rateLimit from "express-rate-limit";

// Configuration for rate limiting
const limitConfig = {
	max: 3, // limit each IP to 3 requests per windowMs
	windowMs: 60 * 1000, // 1 minute
	message: {
		error: "Too many requests from this IP, please try again after a minute",
	},
};

// Middleware to limit repeated requests to public APIs and/or endpoints
export const limitRequests = rateLimit(limitConfig);
