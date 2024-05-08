# projectplannerai.js

An API for interacting with the Project Planner AI API.

# Installation

```bash
npm install projectplannerai # or bun, pnpm, yarn etc.
```

## Usage

```javascript
import { ProjectPlannerAI } from "projectplannerai";

const projectAIClient = ProjectPlannerAI({
  projectId: "<replace-with-your-project-id>",
});
```

## Typings

```typescript
projectId: string;
```

## Create new feedback

```javascript
const newFeedback = await projectAIClient.createFeedback({
  feedback: "Need more features", // required
  name: "John Doe", // optional
  email: "john@example.com", // optional
  label: "complaint", // optional
});
```

## Typings

```typescript
feedback: string;
name?: string;
email?: string;
label?: "idea" | "issue" | "question" | "complaint" | "featureRequest" | "other";
```

## Create new event

```javascript
const event = await projectAIClient.createEvent({
  key: "User Created",
});
```

## Typings

```typescript
key: string;
```

## Get changelog

```javascript
const changelog = await projectAIClient.getChangeLog();
```

## Typings

```typescript
// Returns an array of changelog items
id: string;
date: string;
title: string;
post: string;
```

## The end

This project is not affiliated with Project Planner AI. It is just to make it easier to interact with the API.

```
MIT License
```
