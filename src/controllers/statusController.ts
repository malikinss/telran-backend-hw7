// src/controllers/statusController.ts

import { Request, Response } from "express";

/**
 * Controller to handle status requests.
 * Responds with the current status of the server and the time the request was made.
 * If the request time is not available, it uses the current server time.
 * @param req - Express request object
 * @param res - Express response object
 * @returns void
 * @example
 * // Request
 * GET /status
 * // Response
 * {
 *   "status": "up and running",
 *   "requestedAt": "2023-10-05T14:48:00.000Z"
 * }
 */
export const statusController = (req: Request, res: Response): void => {
	res.json({
		status: "up and running",
		requestedAt: req.requestTime ?? new Date().toISOString(),
	});
};
