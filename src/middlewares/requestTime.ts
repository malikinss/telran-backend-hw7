// src/middlewares/requestTime.ts
import { Request, Response, NextFunction } from "express";

/**
 * Middleware to add request time to the request object
 * @param req - Express request object
 * @param _ - Express response object
 * @param next - Express next middleware function
 */
export function requestTime(req: Request, _: Response, next: NextFunction) {
	req.requestTime = new Date().toISOString();
	next();
}
