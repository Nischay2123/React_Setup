# Frontend Broker

A modern, Groww-inspired frontend application built using React, TypeScript, Vite, Tailwind CSS, and ShadCN UI.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js (v18+ recommended)
* npm

Verify:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd frontend-broker
```

Install dependencies:

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Application will start at:

```text
http://localhost:5173
```

---

## Build Production Version

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Run Linter

```bash
npm run lint
```

---

# 🧪 Manual Testing Checklist

## 1. Landing Page & Navigation (/)

### Check

Open the application.

You should see:

* Sticky Navbar
* Hero Section
* Features Section
* Stats Section
* Footer

### Test Responsiveness

Resize the browser window.

Expected:

* Mobile layout works correctly
* Tablet layout works correctly
* Desktop layout works correctly

### Test Navigation

Click:

* Sign Up
* Sign In

Expected:

* Routes navigate correctly
* No page refresh occurs

---

## 2. Authentication Protection

### Check

Manually visit:

```text
/dashboard
```

without signing in.

Expected:

* ProtectedRoute blocks access
* User is redirected to:

```text
/signin
```

---

## 3. Sign Up Flow (/signup)

### Validation Test

Navigate to:

```text
/signup
```

Click:

```text
Create Account
```

without entering any data.

Expected:

* Zod validation errors appear below fields
* Form submission is prevented

### Success Test

Enter:

```text
Name: Any valid name
Email: Any valid email
Password: Minimum 6 characters
```

Submit the form.

Expected:

* Success toast appears
* User is redirected to:

```text
/signin
```

---

## 4. Sign In Flow (/signin)

### Failure Test

Enter random credentials.

Expected:

* Error toast appears
* Message:

```text
Invalid credentials
```

### Success Test

Use:

```text
Email: test@example.com
Password: any password with 6+ characters
```

Expected:

* Success toast appears
* User is redirected to:

```text
/dashboard
```

---

## 5. Dashboard & Session Persistence (/dashboard)

### Dashboard Check

Expected:

* Welcome message
* User information
* Portfolio statistics
* Logout button

### Persistence Test

Refresh the page.

Expected:

* Session restored from localStorage
* User remains logged in

### Logout Test

Click:

```text
Logout
```

Expected:

* User session removed
* localStorage cleared
* Redirect to:

```text
/
```

---

# 📂 Project Overview

The application follows a **Feature-First Architecture**.

---

## 1. App Configuration (src/app)

This folder acts as the glue layer of the application.

### router/AppRouter.tsx

Responsible for:

* Application routes
* Route hierarchy
* Route registration

Visit this file when adding new pages.

---

### guards/ProtectedRoute.tsx

Responsible for:

* Preventing unauthorized access
* Redirecting unauthenticated users

Used for:

```text
/dashboard
```

and future private routes.

---

### providers/AuthProvider.tsx

Responsible for:

* Global authentication state
* User session persistence
* Auth initialization
* Login handling
* Logout handling

---

## 2. Features (src/features)

Each feature is self-contained.

If a feature is removed, its entire folder can be deleted.

---

### auth/

Authentication system.

#### schemas/auth.schema.ts

Contains:

* Sign In validation schema
* Sign Up validation schema

Modify this file to change:

* Password requirements
* Email validation rules
* Form validation behavior

---

#### hooks/

Contains:

* useSignIn
* useSignUp
* useLogout

These are the business logic layers.

Modify these files to change:

* Redirect behavior
* Success handling
* Error handling
* Authentication flow

---

#### components/

Contains:

* SignInForm
* SignUpForm

Pure UI components.

Modify these files to change:

* Layout
* Labels
* Placeholders
* Styling

---

#### services/auth.service.ts

Mock authentication service.

Responsible for:

* Simulated API requests
* Login logic
* Registration logic

Modify this file to:

* Change mock credentials
* Adjust network delay
* Integrate a real backend

---

### landing/

Public marketing pages.

#### components/

Contains:

* Navbar.tsx
* Hero.tsx
* Features.tsx
* Stats.tsx
* Footer.tsx

Modify these files to:

* Change content
* Update icons
* Add sections
* Adjust styling

---

#### pages/LandingPage.tsx

Responsible for assembling the landing page.

Think of it as the composition layer.

---

### dashboard/

Protected user area.

#### pages/DashboardPage.tsx

Responsible for:

* User dashboard
* Portfolio widgets
* User information

Modify this file to add:

* Charts
* Analytics
* Investments
* Future dashboard modules

---

## 3. Shared Resources (src/shared)

Reusable code shared across features.

---

### components/ui/

Contains ShadCN components:

* Button
* Card
* Form
* Input
* Label
* Separator
* Toast

Reusable throughout the application.

---

### hooks/use-toast.ts

Toast notification system.

Used for:

* Success messages
* Error messages
* Warning messages

---

### lib/utils.ts

Contains utility functions.

Includes:

```ts
cn()
```

for class merging.

---

### services/api/interceptors.ts

Axios interceptors.

Responsible for:

* Token injection
* Request preprocessing
* Response handling

Prepared for future backend integration.

---

# 🏗 Architecture Principles

## Hook-Driven Architecture

### Hooks = Brain

Hooks handle:

* Business logic
* Form state
* Validation
* API calls
* Navigation
* Loading states

### Components = Render Layer

Components handle:

* Rendering UI
* Receiving props
* Triggering callbacks

Components do NOT handle:

* API calls
* Navigation logic
* Business rules

---

# 🔮 Future Enhancements

Potential improvements:

* JWT Authentication
* Refresh Tokens
* Role-Based Access Control
* TanStack Query
* Dark Mode
* Real Backend Integration
* User Preferences
* Analytics Dashboard
* Notification Center
* Multi-Tenant Support

---

# ✅ Current Status

* Feature-First Architecture
* Hook-Driven Design
* TypeScript Strict Mode
* ShadCN UI Integration
* Tailwind CSS
* Responsive Layout
* Protected Routes
* React Hook Form
* Zod Validation
* Mock Authentication
* Session Persistence
* Ready for Backend Integration
