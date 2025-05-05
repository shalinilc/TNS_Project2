# Collegeservice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Placement Management API

This project uses **pgAdmin** with **PostgreSQL** as the backend database and provides CRUD API endpoints using **Node.js** and **Express.js**.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
or refer this..

## 🗃️ Database Details

- **Database Name**: `placement`
- **Table Name**: `placement`

### Table Columns:

| Column Name     | Data Type | Constraints                     |
|------------------|------------|---------------------------------|
| `id`             | Integer    | Primary Key, Identity (Always) |
| `company_name`   | Text       |                                 |
| `job_title`      | Text       |                                 |
| `placement_date` | Date       |                                 |
| `student_id`     | BigInt     |                                 |

---

## 🚀 API Endpoints (Port: 8081)

- **GET** `/api/placement` → Get all placements  
- **POST** `/api/placement` → Insert new placement  
- **PUT** `/api/placement/:id` → Update placement by ID  
- **DELETE** `/api/placement/:id` → Delete placement by ID

---

## 🛠 Setup Instructions

1. Install [PostgreSQL](https://www.postgresql.org/download/) and open **pgAdmin**
2. Create a database named `placement`
3. Create a table `placement` with the columns listed above
4. Clone this repo and install dependencies:
   ```bash
   npm install
Create db.js and configure PostgreSQL credentials

Run the server:

bash
Copy
Edit
node index.js
📬 Postman Usage
Use Postman to test the API at http://localhost:8081/api/placement.

Ensure:

Headers include Content-Type: application/json

POST/PUT methods have valid JSON bodies

✅ Example POST Body
json
Copy
Edit
{
  "company_name": "Infosys",
  "job_title": "Developer",
  "placement_date": "2025-02-15",
  "student_id": 202501001
}
