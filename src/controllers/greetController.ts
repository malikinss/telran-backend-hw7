// src/controllers/greetController.ts

import { Request, Response } from "express";

/**
 * Controller to handle greeting requests.
 * Responds with a greeting message and the time the request was made.
 * If the request time is not available, it uses the current server time.
 * @param req - Express request object
 * @param res - Express response object
 * @returns void
 * @example
 * // Request
 * GET /greet
 * // Response
 * {
 *   "message": "Hello",
 *   "requestedAt": "2023-10-05T14:48:00.000Z"
 * }
 */
export const greetController = (req: Request, res: Response): void => {
	res.json({
		message: "Hello",
		requestedAt: req.requestTime ?? new Date().toISOString(),
	});
};
