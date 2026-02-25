<div align="center">

# 🔥 Ignivox

**Where Makers Ignite & Voices Amplify**

A community-driven product discovery platform, like Product Hunt, where makers showcase their projects, and the community votes to surface the best ones.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?logo=clerk)](https://clerk.com/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-green?logo=drizzle)](https://orm.drizzle.team/)
[![Neon](https://img.shields.io/badge/Neon-Postgres-00e599?logo=neon)](https://neon.tech/)

</div>

---

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live_Demo-ignivox.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://ignivox.vercel.app)

---

## ✨ Features

- **🚀 Product Submissions** — Makers submit products with name, tagline, description, website, and tags via an Organization-scoped flow
- **🗳️ Per-User Voting** — Authenticated users can upvote/unvote products with a single click (toggle mechanism with duplicate prevention)
- **🔍 Explore & Search** — Browse all approved products with search, sort by trending or recent
- **⭐ Featured Products** — Homepage highlights top-voted community picks
- **📅 Recently Launched** — Discover products launched in the last 7 days
- **🛡️ Admin Dashboard** — Role-based admin panel to approve, reject, or delete product submissions with real-time stats
- **🔐 Authentication** — Full auth flow powered by Clerk (sign-in, sign-up, organizations, user profiles)
- **📱 Responsive Design** — Fully responsive UI with modern aesthetics, dark/light themes via Tailwind CSS

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Server Components, Server Actions) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI** | [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) |
| **Authentication** | [Clerk](https://clerk.com/) (Organizations, SSO, User Management) |
| **Database** | [Neon](https://neon.tech/) (Serverless Postgres) |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) |
| **Validation** | [Zod 4](https://zod.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Font** | [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts) |

---

## 📁 Project Structure

```
ignivox/
├── app/                              # Next.js App Router
│   ├── admin/                        # Admin dashboard (role-protected)
│   │   └── page.tsx
│   ├── explore/                      # Browse all approved products
│   │   └── page.tsx
│   ├── products/
│   │   ├── [slug]/                   # Dynamic product detail page
│   │   │   └── page.tsx
│   │   └── page.tsx                  # Redirects to /explore
│   ├── sign-in/[[...sign-in]]/       # Clerk sign-in
│   │   └── page.tsx
│   ├── sign-up/[[...sign-up]]/       # Clerk sign-up
│   │   └── page.tsx
│   ├── submit/                       # Product submission form
│   │   └── page.tsx
│   ├── globals.css                   # Global styles & Tailwind config
│   ├── layout.tsx                    # Root layout (Header + Footer)
│   └── page.tsx                      # Landing page
├── components/
│   ├── admin/                        # Admin panel components
│   │   ├── admin-actions.tsx         # Approve/reject/delete buttons
│   │   ├── admin-product-card.tsx    # Product card for admin view
│   │   └── stats-card.tsx            # Dashboard stats
│   ├── common/                       # Shared components
│   │   ├── custom-user-button.tsx    # Clerk UserButton with admin tab
│   │   ├── empty-state.tsx           # Empty state placeholder
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   └── section-header.tsx
│   ├── forms/
│   │   └── form-field.tsx            # Reusable form field component
│   ├── landing-page/
│   │   ├── featured-products.tsx     # Top-voted products section
│   │   ├── hero-section.tsx          # Landing page hero
│   │   ├── recently-launched-products.tsx
│   │   └── stats-card.tsx            # Landing page stats
│   ├── products/
│   │   ├── product-card.tsx          # Product card with vote state
│   │   ├── product-explorer.tsx      # Search + sort + product grid
│   │   ├── product-skeleton.tsx      # Loading skeleton
│   │   ├── product-submit-form.tsx   # Submission form component
│   │   └── voting-buttons.tsx        # Upvote/downvote toggle buttons
│   └── ui/                           # shadcn/ui primitives
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── skeleton.tsx
│       └── textarea.tsx
├── db/
│   ├── data.ts                       # Seed data definitions
│   ├── index.ts                      # Neon database connection
│   ├── schema.ts                     # Drizzle schema (products, votes)
│   └── seed.ts                       # Database seeding script
├── drizzle/                          # Drizzle migration files
├── lib/
│   ├── admin/
│   │   └── admin-actions.tsx         # Admin server actions
│   ├── products/
│   │   ├── product-actions.ts        # Submit, upvote, downvote actions
│   │   ├── product-select.ts         # Product query functions
│   │   ├── product-validations.ts    # Zod validation schema
│   │   └── vote-queries.ts           # User vote query functions
│   └── utils.ts                      # Utility functions (cn)
├── types/
│   └── index.ts                      # TypeScript type definitions
├── public/                           # Static assets
├── proxy.ts                          # Clerk middleware
├── drizzle.config.ts                 # Drizzle ORM configuration
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── .sample.env                       # Environment variable template
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- A [Clerk](https://clerk.com/) account (for authentication)
- A [Neon](https://neon.tech/) database (for Postgres)

### 1. Clone the repository

```bash
git clone https://github.com/mk-manishkumar/ignivox.git
cd ignivox
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the sample env file and fill in your credentials:

```bash
cp .sample.env .env
```

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```

### 4. Push the database schema

```bash
npx drizzle-kit push
```

### 5. Set up admin access

In your [Clerk Dashboard](https://dashboard.clerk.com/), navigate to **Users** → select your user → **Public metadata**, and set:

```json
{ "isAdmin": true }
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📊 Database Schema

```
┌──────────────────────────┐       ┌──────────────────────────┐
│        products          │       │          votes           │
├──────────────────────────┤       ├──────────────────────────┤
│ id          SERIAL PK    │◄──────│ id          SERIAL PK    │
│ name        VARCHAR(255) │       │ user_id     VARCHAR(255) │
│ slug        VARCHAR(255) │       │ product_id  INTEGER FK   │
│ tagline     VARCHAR(255) │       │ created_at  TIMESTAMP    │
│ description TEXT         │       └──────────────────────────┘
│ website_url VARCHAR(255) │        UNIQUE(user_id, product_id)
│ tags        TEXT[]       │
│ vote_count  INTEGER      │
│ status      VARCHAR(50)  │
│ user_id     VARCHAR(255) │
│ organization_id VARCHAR  │
│ submitted_by VARCHAR     │
│ created_at  TIMESTAMP    │
│ approved_at TIMESTAMP    │
└──────────────────────────┘
```

---

## 🔑 Key Concepts

### Server Actions
All data mutations (submit, vote, approve, reject, delete) use **Next.js Server Actions** — no API routes needed.

### Vote Toggle
Upvoting is a **toggle**: click once to vote, click again to unvote. Per-user tracking via the `votes` table prevents duplicate votes.

### Role-Based Access
- **Regular users** — Browse, search, vote, submit products
- **Admins** (`publicMetadata.isAdmin === true`) — Access the admin dashboard to moderate submissions

### Organization-Scoped Submissions
Products are submitted under a Clerk Organization, enabling team-based product ownership.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx drizzle-kit push` | Push schema changes to database |
| `npx drizzle-kit studio` | Open Drizzle Studio (DB GUI) |

---

## 🚢 Deployment

Deploy to [Vercel](https://vercel.com/) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js)

Make sure to add all environment variables from `.sample.env` to your Vercel project settings.

---

## 📄 License

This project is private and not licensed for public distribution.

---

<div align="center">
  <b>Built with ❤️ by Manish Kumar</b>
</div>
