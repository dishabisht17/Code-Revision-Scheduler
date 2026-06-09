# Code Revision Scheduler

A DSA spaced-repetition revision scheduler built with React and Tailwind CSS.

## Live Demo
[code-revision-scheduler.vercel.app](https://code-revision-scheduler.vercel.app)

## About
Code Revision Scheduler helps competitive programmers and placement aspirants remember solved DSA problems using spaced repetition — a proven memory technique for effective learning .

Instead of randomly revising problems, the app schedules revisions at optimal intervals: 1 → 3 → 7 → 15 → 30 days. Based on how well you remember each problem, the interval adjusts dynamically.

## Features
- Add DSA problems with topic, difficulty, pattern, notes and tags
- Automatic revision scheduling using spaced repetition algorithm
- Recall tracking — mark each revision as Easy, Medium, Hard, or Forgot
- Dynamic interval adjustment based on recall quality
- Dashboard with today's revisions, total problems, and stats
- Analytics showing weakest topics and recall success rate
- Delete problems
- Data persists using localStorage
- Fully responsive — works on mobile and desktop

## Tech Stack
- React
- Tailwind CSS
- JavaScript
- localStorage

## How It Works
1. Add a solved DSA problem
2. App schedules first revision for next day
3. After each revision, mark your recall quality
4. App adjusts next revision date based on your response
5. Easy → interval increases, Forgot → resets to day 1

## Run Locally
```
npm install
npm run dev
```