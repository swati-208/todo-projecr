This is simple todo-project



using Spring Boot + PostgreSQL + React



1\. Database Setup Steps



&nbsp; 1. Install PostgreSQL.

&nbsp; 2. Open PostgreSQL and run:



&nbsp; ```sql

&nbsp; CREATE DATABASE todo\_db;

```



&nbsp; 3. Configure `application.properties` in backend:



&nbsp; ```properties

&nbsp;  spring.datasource.url=jdbc:postgresql://localhost:5432/todo\_db

&nbsp;  spring.datasource.username=postgres

&nbsp;  spring.datasource.password=root



&nbsp;  spring.jpa.hibernate.ddl-auto=update

---

&nbsp;2. How to Run Backend



&nbsp;   1. Open terminal inside backend folder.

&nbsp;   2. Run:



&nbsp;   ```bash

&nbsp;    mvn spring-boot:run

&nbsp;   ```



&nbsp;   Backend will start at:



&nbsp;   ```

&nbsp;   http://localhost:8081

&nbsp;   ```



---



3\. How to Run Frontend



&nbsp;   1. Open terminal inside frontend folder.

&nbsp;   2. Install dependencies:



&nbsp;   ```bash

&nbsp;   npm install

&nbsp;   ```



&nbsp;   3. Start React app:



&nbsp;   ```bash

&nbsp;   npm start

&nbsp;   ```



&nbsp;   Frontend runs at: http://localhost:3000



&nbsp;   Make sure backend is running before starting frontend.

&nbsp;   ---



4\. List of API Endpoints



&nbsp;Base URL: http://localhost:8081/todos



&nbsp;Method    Endpoint           Description     



&nbsp;POST       /todos            Create new todo

&nbsp;GET        /todos            Get all todos

&nbsp;GET        /todos/{id}       Get todo by id

&nbsp;PUT        /todos/{id}       Update todo

&nbsp;DELETE     /todos/{id}       Delete todo



