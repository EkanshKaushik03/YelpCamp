# YelpCamp

A full-stack campground discovery and review application built as part of **Colt Steele's The Web Developer Bootcamp**.

YelpCamp allows users to explore campgrounds, share their own camping destinations, and leave reviews. The project demonstrates how a server-rendered web application can combine a backend, database, authentication, and a dynamic user interface.

**Repository:** [EkanshKaushik03/YelpCamp](https://github.com/EkanshKaushik03/YelpCamp)

## Features

- **Campground Management** — Create, view, edit, and delete campground listings.
- **User Authentication** — Register, log in, and log out of user accounts.
- **Reviews** — Share feedback and ratings for campgrounds.
- **Authorization** — Restrict campground and review modifications to authorized users.
- **Input Validation** — Validate user-submitted data on the server using Joi.
- **Session Management** — Maintain authenticated sessions across requests.
- **Flash Messages** — Display success and error notifications for user actions.
- **Error Handling** — Handle invalid requests and application errors gracefully.
- **Responsive UI** — Render dynamic pages using EJS and Bootstrap.

## Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Application logic |
| Node.js | JavaScript runtime |
| Express.js | Backend framework and routing |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| EJS | Server-side templating |
| EJS-Mate | Reusable EJS layouts |
| Bootstrap | Responsive UI styling |
| Passport.js | Authentication |
| Express Session | Session management |
| Connect Flash | Flash notifications |
| Joi | Server-side data validation |
| Method Override | Support for PUT and DELETE form requests |

## Getting Started

Follow these steps to run YelpCamp locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/try/download/community), running locally or accessible through a MongoDB connection URI
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/EkanshKaushik03/YelpCamp.git
cd YelpCamp
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root if the application uses environment variables. Configure the MongoDB connection string and session secret according to the application's configuration.

For example:

```env
DB_URL=mongodb://127.0.0.1:27017/yelp-camp
SECRET=your_session_secret
```

Use the variable names expected by the application. Keep `.env` out of version control and never commit real credentials or secrets.

**4. Start MongoDB**

If you are using a local MongoDB installation, make sure the MongoDB service is running before starting the application.

**5. Start the application**

Run the command configured in your `package.json`. For example:

```bash
node app.js
```

Open the local URL configured by the application in your browser, typically:

```text
http://localhost:3000
```

## What I Learned

Building YelpCamp provided practical experience with full-stack web development, including:

- Designing RESTful routes and implementing CRUD operations.
- Connecting an Express application to MongoDB using Mongoose.
- Structuring an application with separate models, routes, middleware, and views.
- Implementing authentication, authorization, and session-based user management.
- Validating incoming data and handling application errors.
- Rendering dynamic pages with EJS and reusable layouts.
- Managing user feedback through flash messages.
- Understanding how frontend and backend components work together in a complete web application.

## Acknowledgements

- **[Colt Steele](https://www.udemy.com/)** — For teaching the concepts and guiding the development of YelpCamp through *The Web Developer Bootcamp*.
- The developers and maintainers of the open-source libraries used in this project.

---

*This project was developed as a course-following implementation for learning and practicing full-stack web development.*
