# Little-Help

Little Help, a subscription finance analytics dashboard for people who want greater control over recurring spending.
It is designed for people at a financial turning point who want to review automatic payments 
and make more intentional choices.

Small subscription charges can be easy to overlook because each payment feels too small to matter. 
Little Help brings those costs together on one simple financial dashboard, helping users assess which
services they value and which they might cancel. Users can also explore the hypothetical future value of investing
the money saved, based on clearly stated assumptions.

## University project

This project is being developed for IU International University of Applied Sciences.

- Student: Lucas Alex Rodrigues De Araújo 
- Course: Project: Getting Started in Web Programming
- Course code: DLBITPEWP01_E
- Selected topic: Finance Analytics Dashboard

## Planned features

- Add subscriptions with a name, price, billing frequency, start date, category, and importance rating.
- Convert weekly and yearly subscription costs into monthly equivalents.
- Review subscriptions and their cumulative recorded spending.
- Receive a review prompt when multiple subscriptions share a category.
- Search, sort, filter, and browse payment history using a paginated table.
- View subscription spending by category.
- Compare continued subscription costs with hypothetical investment growth.
- Mark subscriptions as Divert Candidates and explore investment scenarios over 1, 3, or 5 years.

## Investment scenarios

- The calculator will use the monthly-equivalent cost of selected subscriptions 
as a hypothetical monthly investment contribution.

- These scenarios are illustrations, not predictions or guaranteed returns.

- Selecting a Divert Candidate will not cancel a subscription or invest money. 
Historical spending will be calculated from recorded payments.

## Frontend

- HTML — page structure.
- CSS — styling and responsive layouts.
- JavaScript — interactions and dynamic updates.
- DataTables.js — searching, sorting, filtering, and pagination.
- Chart.js — spending and investment comparison charts.
- jQuery — dependency required by DataTables.

## Backend

- Node.js — runs JavaScript on the server.
- Express — handles application routes and requests.
- pg — connects the backend to PostgreSQL and supports parameterized queries.

## Database

- PostgreSQL — stores categories, subscriptions, and payments.

The planned data model contains three related tables.

- categories: each category can contain multiple subscriptions.
- subscriptions: each subscription belongs to one category and can have multiple payments.
- payments: each payment belongs to one subscription and records its date and amount.

## Project scope

The initial prototype will use fictional subscription and payment data in a single currency.
It will support weekly, monthly, and yearly billing frequencies.

The following features are outside the initial scope:

- User accounts and authentication.
- Bank connections.
- Automatic subscription cancellation.
- Live or historical stock-market data.
- Actual investing or brokerage connections.
- Currency conversion.

## Current status

Phase 1: Conception. Implementation has not started.

## Running the application

The application is not runnable yet. Installation, database setup, sample data, 
and startup instructions will be added during development.