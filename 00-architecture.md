# Project Architecture

## Goal

Build a Groww-inspired landing page with authentication using:

* React
* Vite
* TypeScript
* ShadCN UI
* Tailwind CSS
* React Hook Form
* Zod
* Axios

## Architecture Rule

Hooks = Brain

Components = Render Layer

### Components

Components must:

* Receive props
* Render UI
* Trigger callbacks

Components must NOT:

* Call APIs
* Perform navigation
* Manage form setup
* Handle validation
* Contain business logic

### Hooks

Hooks must handle:

* Form state
* Validation
* API calls
* Navigation
* Loading states
* Toasts
* Business logic

## Folder Structure

src/

app/
router/
providers/
guards/

features/
auth/
components/
hooks/
services/
schemas/
types/
pages/

landing/
components/
hooks/
pages/

dashboard/
components/
hooks/
pages/

shared/
components/
hooks/
services/
lib/
utils/
constants/
types/

## Standards

* Strict TypeScript
* No any
* SOLID principles
* Absolute imports
* Feature-first architecture
* Reusable hooks
* Reusable UI components

## Output Requirements

Always:

1. Show folder structure first
2. Generate complete files
3. Include exact paths
4. Explain architecture decisions
5. Never skip required files
