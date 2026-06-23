# Internal Company Portal — Backend Prototype

Hexagonal architecture prototype using Node.js + TypeScript + Express + Zod.

Structure highlights:
- `src/domain` — entities and value objects
- `src/application` — use cases and validation (Zod)
- `src/ports` — interfaces (repository, notification)
- `src/adapters` — in-memory repositories and Express controllers
- `src/infrastructure` — config, middleware, error handling

Run locally:

```bash
npm install
npm run dev
```

The app starts on port `3001` by default.

## API Endpoints

- `POST /api/announcements` — create a draft announcement
- `POST /api/announcements/:id/publish` — publish a draft announcement
- `GET /api/announcements` — list all announcements
- `GET /api/announcements/:id` — get announcement details
- `POST /api/feedback` — submit a feedback item
- `GET /api/feedback` — list all feedback (HR/Admin only)

## Authentication / RBAC Simulation

The prototype uses a mock auth middleware.

Add one of these headers in Postman:

- `x-user-role: HR_ADMIN`
- `x-user-role: DEPT_ADMIN`
- `x-user-role: Employee`

Or send a JSON user object in `x-user`:

```http
x-user: { "id": "user-1", "role": "HR_ADMIN", "departmentId": "dept-1" }
```

`HR_ADMIN` and `DEPT_ADMIN` can create and publish announcements. `Employee` can submit feedback and read announcements.

## Example Postman Requests

### 1. Create Announcement

POST `http://localhost:3001/api/announcements`

Headers:
- `Content-Type: application/json`
- `x-user-role: HR_ADMIN`

Body:
```json
{
  "title": "Quarterly Townhall",
  "content": "Please join the all-company townhall next Friday.",
  "departmentId": "dept-1"
}
```

Expected response:
```json
{
  "id": "...",
  "title": "Quarterly Townhall",
  "content": "Please join the all-company townhall next Friday.",
  "authorId": "mock-user",
  "departmentId": "dept-1",
  "status": "DRAFT",
  "createdAt": "...",
  "publishedAt": null
}
```

### 2. Publish Announcement

POST `http://localhost:3001/api/announcements/{id}/publish`

Headers:
- `Content-Type: application/json`
- `x-user-role: HR_ADMIN`

Expected response changes status to `PUBLISHED` and sets `publishedAt`.

### 3. List Announcements

GET `http://localhost:3001/api/announcements`

Headers:
- `x-user-role: Employee`

Returns all stored announcements for verification.

### 4. Submit Feedback

POST `http://localhost:3001/api/feedback`

Headers:
- `Content-Type: application/json`
- `x-user-role: Employee`

Body:
```json
{
  "message": "The townhall time conflicts with my department meeting.",
  "targetAnnouncementId": "{announcementId}"
}
```

Expected response:
```json
{
  "id": "...",
  "authorId": "mock-user",
  "message": "...",
  "targetAnnouncementId": "...",
  "status": "SUBMITTED",
  "createdAt": "...",
  "reviewedAt": null
}
```
