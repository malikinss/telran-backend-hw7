# Homework 7:

## Task Definition

Solve challenge described below:

Your task is to create a series of middleware functions and routes to satisfy the following requirements:

1. create a middleware requestTime that appends a requestTime property (with the current date-time) to the request object.
2. create a middleware limitRequests that limits a client to making a maximum of 3 requests per minute. If the limit is exceeded, respond with a 429 status code and a message indicating that the rate limit has been exceeded.
3. Add a route /api/greet(HTTP POST) that uses the above two middlewares and responds with a JSON {"message": "Hello", "requestedAt": "<requestTime>"}.
4. Add anotrher route api/status(HTTP GET) that responds with a JSON {"status": "up and running", "requestedAt": <requestTime> } but does NOT make use of the limitRequests middleware.

In the express-rate-limit third party middleware you may use only fields (see documentation) that you logically understand windowMs, limit and message

## Description 📝

## Purpose 🎯

## Features ✨

## How It Works 🔍

## Output 📜

## Usage 📦

## Usage Examples 🚀

## Project Structure 🗂

## Dependencies ✅

## License 📄

MIT

## Conclusion 🧮

Made with ❤️ and `TypeScript` by Sam-Shepsl Malikin

```

```
