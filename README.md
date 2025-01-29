# Employee-Management-System-V1


This is a web application  with **Spring Boot** backend that interacts with MySQL DB .It exposes REST API that the frontend consumes to update information .
The frontend is **React (Vite)** that communicates with the backend using Axios to send API requests.
The application provides functionality to manage employee records.

---

##  **Features**
- **View All Employee**: view a list of all Employees.
- **Add a New Employee**: Add employee by providing(first name , last name , email)
- **Edit Employee Information**: Update Employee details.
- **Delete an Employee**: Remove Employee records.

---

##  **Steps to Run the Application**

### **Prerequisites**
Before you begin, ensure you have the following installed:
-  **Docker**: To build and run the application using containers.
-  **Git**: To clone the repository.

---

### **Setup and run**

1. Clone the repository:
   `git clone https://github.com/sara81a/Employee-Management-System-V1.git`
2. Build the Docker images:
   `docker-compose build`
3. Run the application:
   `docker-compose up`
4. Access the application in your browser at:
   `http://localhost:5173/`

---

