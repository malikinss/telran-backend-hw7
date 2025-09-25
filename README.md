# Homework 7: Express Middleware and Routes

## Task Definition

Create a TypeScript-based Express application with the following requirements:

1. **Middleware `requestTime`**:  
   Appends a `requestTime` property (current date-time) to the request object.

2. **Middleware `limitRequests`**:  
   Limits each client to 3 requests per minute.  
   If exceeded, respond with **HTTP 429** and a message:  
   `{"error": "Too many requests from this IP, please try again after a minute"}`.

3. **Route `/api/greet` (POST)**:  
   Uses `requestTime` and `limitRequests`. Responds with:

    ```json
    { "message": "Hello", "requestedAt": "<requestTime>" }
    ```

4. **Route `/api/status` (GET)**:
   Uses only `requestTime` (not `limitRequests`). Responds with:
    ```json
    { "status": "up and running", "requestedAt": "<requestTime>" }
    ```

> **Note on `express-rate-limit` usage:**
> In version 8.1.0, the configuration object uses `max` (not `limit`) for the number of requests and `windowMs` for the timing window.
> Import should be:
>
> ```ts
> import rateLimit from "express-rate-limit";
> ```

## Description 📝

This project is a TypeScript Express server that demonstrates middleware usage, request rate limiting, and modular route design.
It highlights how to attach metadata to requests, limit repeated requests, and handle JSON responses.

## Purpose 🎯

-   Learn **Express middleware** creation and chaining
-   Implement **rate limiting** using `express-rate-limit`
-   Practice **TypeScript types augmentation** for Express `Request`
-   Separate concerns using **controllers**, **routers**, and **middlewares**

## Features ✨

-   ✅ Custom middleware for `requestTime`
-   ✅ Rate limiting for specific routes
-   ✅ Modular route/controller architecture
-   ✅ Express + TypeScript type safety
-   ✅ JSON API responses with timestamps

## How It Works 🔍

1. Express server starts (`index.ts`) and mounts `/api` routers.
2. `/api/greet` route:

    - `requestTime` middleware sets `req.requestTime`
    - `limitRequests` middleware enforces request limit
    - `greetController` sends JSON response with greeting and timestamp

3. `/api/status` route:

    - Only `requestTime` middleware is applied
    - `statusController` sends JSON response with status and timestamp

## Output 📜

**POST /api/greet**

```json
{
	"message": "Hello",
	"requestedAt": "2025-09-21T22:30:00.000Z"
}
```

**GET /api/status**

```json
{
	"status": "up and running",
	"requestedAt": "2025-09-21T22:30:05.000Z"
}
```

**Rate limit exceeded (429)**

```json
{
	"error": "Too many requests from this IP, please try again after a minute"
}
```

## Usage 📦

```bash
git clone [repository URL]
cd [project folder]
npm install
npm run dev     # for development with hot reload
npm run start   # for production
```

## Usage Examples 🚀

```bash
# Test greet route
curl -X POST http://localhost:3000/api/greet -H "Content-Type: application/json"

# Test status route
curl http://localhost:3000/api/status
```

## Project Structure 🗂

```
src/
 ├─ index.ts                 # Server entry point
 ├─ routes/
 │   ├─ greetRoute.ts        # /api/greet route
 │   └─ statusRoute.ts       # /api/status route
 ├─ controllers/
 │   ├─ greetController.ts   # greet handler
 │   └─ statusController.ts  # status handler
 ├─ middlewares/
 │   ├─ requestTime.ts       # requestTime middleware
 │   └─ limitRequests.ts     # rate limiting middleware
 └─ types/
     └─ express.d.ts         # TypeScript augmentation for Request
```

## Dependencies ✅

-   **Node.js** 18+
-   **TypeScript** 5.x
-   **Express** 5.x
-   **express-rate-limit** 8.x
-   **ts-node / tsx** for development

## License 📄

MIT

## Conclusion 🧮

This project demonstrates:

-   Middleware creation and chaining in Express
-   Request rate limiting with `express-rate-limit`
-   Modular project structure using routers and controllers
-   TypeScript types extension for Express request objects
-   JSON API responses with proper status codes

---

Made with ❤️ and `TypeScript` by Sam-Shepsl Malikin
