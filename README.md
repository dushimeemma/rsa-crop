# Crop Management API

This is a basic Crop Management API built with **Node.js**, **TypeScript**, and **Express**. It allows you to manage crops, check harvest readiness, and interact with crop data through a simple RESTful API.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= 14.x)
- **Yarn** (>= 1.x) or **npm**
- **Docker** (for database setup)

## Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/dushimeemma/rsa-crop.git
   cd crop-api
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Copy the `.env.example` file to `.env` and configure your database credentials:

   ```bash
   cp.env.example .env
   ```

4. Prisma database migrations:

   ```bash
   yarn prisma migrate dev
   ```

5. Start the development server:

   ```bash
   yarn dev
   ```

6. API Endpoints:

- POST /crops: Create a new crop

```json
{
  "name": "Tomato",
  "plantingDate": "2024-02-01T00:00:00Z",
  "expectedHarvest": "2024-05-01T00:00:00Z",
  "latitude": 34.0522,
  "longitude": -118.2437
}
```

- GET /crops: Get all crops
- SEARCH /crops/search?name={name}: Search crops by name
- FILTER /crops/filter: Filter crops by harvest readiness
