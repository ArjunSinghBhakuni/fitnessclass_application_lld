🏋️‍♀️ Fitness Class Booking System
A TypeScript-based application that allows users to choose and book fitness classes, with robust features such as tier-based booking limits, class scheduling, waitlists, and cancellations — designed using solid object-oriented principles and modern design patterns.

🚀 Features
✅ User Management

Register and log in as a user.

Supports three user tiers: Platinum, Gold, and Silver, each with different class booking limits.

✅ Class Management

Book different types of classes: Yoga, Gym, Dance, etc.

Class capacity handling and schedule-based availability.

Admin users can create, schedule, and cancel classes.

✅ Booking System

Real-time booking based on available capacity.

Automatic waitlisting when classes are full.

Automatic promotion from waitlist on cancellations.

✅ Cancellation Policy

Users can cancel up to 30 minutes before the class starts.

Waitlist users are automatically notified and moved to confirmed attendees.

✅ Design Patterns & Principles

State Pattern for booking status transitions.

Strategy Pattern for tier-based booking limits.

Factory Pattern for class creation.

Observer Pattern for notifications on booking changes.

Singleton usage for central booking service.

⚙️ Tech Stack
TypeScript — Strongly typed, modern JavaScript.

Node.js — Runtime environment.

OOP Design — Clear, extensible class-based structure.

Design Patterns — Industry-proven patterns to ensure scalability and maintainability.

📁 Project Structure
cpp
Copy
Edit
src/
├── models/        // Domain models (User, Admin, FitnessClass, Booking)
├── services/      // Core business logic (BookingService, UserService)
├── utils/         // Utilities and helpers
├── enums/         // Enums for status and tiers
├── index.ts       // Entry point
💡 How to Run
bash
Copy
Edit
# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Run the application
node dist/index.js

# Or run directly using ts-node (if installed)
npx ts-node src/index.ts


✨ Future Enhancements
Add database integration for persistent user and class data.

Integrate authentication & authorization (JWT, OAuth).

Build REST APIs or GraphQL endpoints.

Add a frontend UI (React or Next.js).

Email/SMS notifications for bookings and cancellations.

