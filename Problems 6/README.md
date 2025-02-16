This module handles updating user scores and displaying the top 10 leaderboard in real-time. It ensures secure and efficient score updates while preventing unauthorized access.

## Features:

- Score Update API: Updates user scores when an action is completed.
- Real-time Leaderboard: Live updates for the top 10 scores.
- Authentication: Prevents malicious users from unauthorized score updates.

## Tech stack:

- Nodejs, Mysql, Redis, WebSocket

## API Endpoints:

- POST /api/scores/increase

  - Headers: Authorization: Bearer <JWT>

  - Request Body:
    {
    "userId": "string",
    "score": number
    }

  - Response:
    {
    "success": boolean,
    "message": "string"
    }

- GET /api/scores/top10
  - Response:
    {
    "success": boolean,
    "data": top10,
    "message": "string"
    }

## Improvements

- Implement rate limiting to prevent abuse.
- Add logging for monitoring and debugging.
- Enhance security with JWT authentication.
