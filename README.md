📘 AI Career Coach – Documentation
📌 Overview

AI Career Coach is a Next.js-based full-stack web application that helps job seekers improve their career growth through AI-powered features like:

Resume & Cover Letter generation

Industry insights

Career quizzes & assessments

Personalized career guidance

The app leverages Google’s Gemini AI, Prisma ORM for database management, Inngest for background jobs, and Shadcn UI for a modern user interface.

🏗️ Tech Stack

Frontend & Backend Framework: Next.js 14+ (App Router)

Database ORM: Prisma
 (with PostgreSQL/MySQL/SQLite)

UI Library: Shadcn UI
 + Tailwind CSS

AI Integration: Google Gemini API

Background Jobs & Events: Inngest

Authentication: Clerk/Auth.js (or custom JWT-based auth)

Deployment: Vercel (frontend) + Railway/Supabase (database)

🔑 Core Features
1. AI Resume Builder

Upload existing resume (PDF/Docx) or create from scratch.

Gemini AI suggests improvements, ATS optimization, and job-specific tailoring.

Option to export as PDF/Word.

2. AI Cover Letter Generator

User inputs job description → Gemini AI generates a personalized cover letter.

Supports multiple tones (formal, concise, creative).

Editable rich-text editor before final export.

3. Industry Insights

Gemini AI provides insights about:

In-demand skills for specific industries.

Salary benchmarks based on job title & location.

Trending technologies in the field.

4. Career Quiz & Personality Tests

Quiz engine built with Prisma + Inngest to store & evaluate results.

Gemini AI provides personalized career suggestions based on responses.

Tracks user progress & insights over time.

5. User Dashboard

Profile setup with career goals, skills, preferred industries.

Track saved resumes, cover letters, insights, and quiz results.

Notifications for new insights/jobs via Inngest background tasks.
