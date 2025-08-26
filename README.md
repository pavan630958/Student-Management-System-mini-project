# 🎓 Student Management System — Full Stack (Spring Boot + HTML/CSS/Bootstrap/JS)

A **Full-Stack Student Management System** project with:  
--------------------------------------------------------
- 🌐 **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript  
- ⚙️ **Backend:** Spring Boot REST API (Spring Data JPA, Hibernate, Validation)  
- 🐬 **Database:** MySQL  

This application demonstrates end-to-end CRUD operations with a responsive UI and RESTful APIs.

## ✨ Features
---------------
- 👥 Manage Students (Create, Read, Update, Delete)
- ✅ RESTful endpoints with proper HTTP status codes
- 📋 Validation rules (email, phone number, mandatory fields, year >= 1)
- ⚠️ Centralized exception handling (validation errors, not found, generic errors)
- 💾 Data persistence with MySQL using Spring Data JPA
- 🎨 Responsive UI with Bootstrap (forms + tables)
- 🛠️ Tested APIs using Postman


## 🛠️ Tech Stack
------------------
**Frontend**
- HTML5  
- CSS3  
- Bootstrap 5  
- JavaScript  

**Backend**
- Java 17  
- Spring Boot 3 (Web, Validation)  
- Spring Data JPA (Hibernate)  
- MySQL  
- Maven  


## 📁 Project Structure
------------------------
student-management-system/
├─ src/main/java/com/excelr/studentmanagement/
│ ├─ StsBackendSpringbootApplication.java # Main class
│ ├─ entity/Student.java # Entity with validation
│ ├─ restcontroller/StudentRestController.java # REST endpoints
│ ├─ service/StudentService.java # Service interface
│ ├─ service/StudentImplementation.java # Service implementation
│ ├─ studentrepository/StudentRepository.java # JPA repository
│ └─ exception/
│ ├─ GlobalExceptionHandler.java
│ └─ StudentNotFoundException.java
├─ src/main/resources/
│ └─ application.properties # DB config
├─ frontend/
│ ├─ index.html
│ ├─ css/style.css
│ └─ js/script.js
└─ pom.xml


## ⚙️ Configuration
----------------------
Edit `src/main/resources/application.properties`:
```properties
spring.application.name=Sts-Backend-Springboot
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

spring.datasource.url=jdbc:mysql://localhost:3306/pavan
spring.datasource.username=root
spring.datasource.password=Admin@123
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

###🚀 Running the Project
--------------------------
Backend
mvnw.cmd spring-boot:run
Server starts at → http://localhost:8080

Frontend
Open frontend/index.html in a browser.
UI communicates with backend APIs at http://localhost:8080/students.

###📡 REST API Endpoints
--------------------------

Base path: /students
_________________________________________________
Method	 |   Endpoint	  |  Description           
POST	   |   /add	      |  Create a student
GET	     |  /getall	    |  Get all students
GET	     |  /{id}	      | Get student by ID
PUT	     | /update/{id}	| Update student by ID
DELETE	 | /delete/{id}	|  Delete student by ID
___________________________________________________


Example Request Body (JSON)
{
  "rollNo": "22MCA001",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phoneNo": "9876543210",
  "course": "MCA",
  "year": 2
}


✅ Validation Rules
---------------------

rollNo, name, email, phoneNo, course → required

email → must be valid

phoneNo → 10 digits only

year → must be ≥ 1


🧪 Postman API Testing
-------------------------
1. Create Student (POST)

http://localhost:8080/students/add

{
  "rollNo": "22MCA001",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phoneNo": "9876543210",
  "course": "MCA",
  "year": 2
}

2. Get All Students (GET)

http://localhost:8080/students/getall

3. Get Student by ID (GET)

http://localhost:8080/students/1

4. Update Student (PUT)

http://localhost:8080/students/update/1

5. Delete Student (DELETE)

http://localhost:8080/students/delete/1


🛣️ Roadmap
--------------

🔑 Add authentication & role-based access (Admin/Student)

🐳 Dockerize app + MySQL

📄 Add pagination & search on student list

🎨 Improve frontend UI (toasts, modals, sorting)

☁️ Deploy on AWS or Render

👤 Author
--------------

Pavan Kumar Annabattula

LinkedIn: p[avan6309](https://www.linkedin.com/in/pavan6309/)

GitHub: [pavan630958](https://github.com/pavan630958)
