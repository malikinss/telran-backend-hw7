// src/types/express.d.ts

export {}; // Ensure this file is treated as a module

declare global {
	namespace Express {
		interface Request {
			requestTime?: string; // Add the requestTime property to the Request interface
		}
	}
}
