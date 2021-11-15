CREATE TABLE department (
    dep_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(45) NOT NULL
);

CREATE TABLE roles (
    rol_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    salary DECIMAL(10.3) NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_dep_id FOREIGN KEY (department_id) REFERENCES department(dep_id) ON DELETE SET NULL
);

CREATE TABLE employee (
    emp_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER REFERENCES employees(emp_id),
    CONSTRAINT fk_emp_role FOREIGN KEY (role_id) REFERENCES roles(rol_id) ON DELETE SET NULL
)

/* Query for all Employees
SELECT e.emp_id AS "Employee ID", e.first_name AS "First Name", 
    e.last_name AS "Last Name", d.dep_name AS Department, 
    r.title AS Title, FORMAT(r.salary,0) AS Salary, 
    CONCAT(m.first_name, " ", m.last_name) AS Manager
FROM employee e
LEFT JOIN roles r
ON e.role_id = r.rol_id
LEFT JOIN department d
ON r.department_id = d.dep_id
LEFT JOIN employee m
on m.emp_id = e.manager_id;
*/

/* Query for Budget
SELECT d.dep_id, d.dep_name, CONCAT(FORMAT(SUM(r.salary),0)) AS budget
  FROM employee e
  LEFT JOIN roles r
	ON e.role_id = r.rol_id
  LEFT JOIN department d
  ON d.dep_id = r.department_id
  GROUP BY d.dep_id, d.dep_name
*/

/* Query for View All Departments

/* Query for View All Roles

/* Query for Add a Department

/* Query for Add a Role

/* Query for Add an Employee

/* Query for Update an Employee Role

/* Query for Update an Employee Manager

/* Query for View Employees by Department

/* Query for Delete Departments, Roles, Managers
