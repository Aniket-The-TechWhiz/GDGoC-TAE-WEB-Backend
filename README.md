# GDSC Trinity Academy of Engineering - Website Backend

Welcome to the official backend repository for the Google Developer Student Club (GDSC) chapter at Trinity Academy of Engineering, Pune. This server-side application powers our community website by managing events, handling contact messages, and providing the necessary data to the frontend.

## Features

  * **Event Management:** Full CRUD (Create, Read, Update, Delete) functionality for all club events, including workshops, info sessions, and competitions.
  * **Contact Form Submissions:** An API endpoint to receive and store messages from visitors via the website's contact form.
  * **Admin-Protected Routes:** Key endpoints for creating, updating, and deleting content are protected and require administrative privileges to access.

## Tech Stack

* **Node.js**
* **Express**
* **MongoDB** (with Mongoose)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (v14 or higher recommended)
  * npm (Node Package Manager)
  * A MongoDB database instance (either local or through a service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/GDGoC-TAE-WEB-Backend.git
    cd GDGoC-TAE-WEB-Backend
    ```

2.  **Install NPM packages:**

    ```sh
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env` in the root of the project and add the following variables.

    ```env
    # Your MongoDB connection string
    MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

    # The port the server will run on
    PORT=5000
    ```

4.  **Start the Server:**

    ```sh
    node server.js
    ```

    The server should now be running on the port you specified, typically `http://localhost:5000`.

## API Endpoints

The following are the available API routes.

### A Note on Authentication

Admin-protected routes require a custom HTTP header to be sent with the request: `x-admin-key: supersecretkey`.

> **Disclaimer**: This authentication method is for demonstration purposes only and is not secure for a production environment. A proper JWT or session-based authentication should be implemented for a live site.

-----

### Event Routes

Base URL: `/api/events`

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Public | Retrieves a list of all events, sorted by date. |
| `POST`| `/` | Admin | Creates a new event. |
| `PATCH`| `/:id` | Admin | Updates an existing event by its ID. |
| `DELETE`| `/:id` | Admin | Deletes an event by its ID. |

**`POST /api/events` Request Body:**

```json
{
    "title": "Introduction to Web Development",
    "type": "Workshop",
    "status": "Upcoming",
    "date": "2025-10-15",
    "time": "4:00 PM",
    "location": "Auditorium",
    "url": "https://forms.gle/your-registration-link"
}
```

  * The `status` field must be either "Upcoming" or "Past Event".
  * All fields except `url` are required.

-----

### Message Routes

Base URL: `/api/messages`

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/` | Public | Submits a new message from the contact form. |
| `GET` | `/` | Admin | Retrieves a list of all received messages. |
| `PATCH`| `/:id/read` | Admin | Marks a specific message as read. |
| `DELETE`| `/:id` | Admin | Deletes a message by its ID. |

**`POST /api/messages` Request Body:**

```json
{
    "fullName": "Aarav Sharma",
    "email": "aarav.sharma@example.com",
    "subject": "Question about upcoming event",
    "message": "Hello, I would like to know more details about the Web Development workshop. Thank you!"
}
```

  * All fields are required.

-----

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Acknowledgements

  * **Google Developer Student Clubs**
  * **Trinity Academy of Engineering, Pune**
