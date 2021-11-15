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
SELECT 
    e.emp_id AS `Employee ID`, 
    e.first_name AS `First Name`, 
    e.last_name AS `Last Name`, 
    d.dep_name AS Department, 
    r.title AS Title, 
    FORMAT(r.salary,0) AS Salary, 
    CONCAT(m.first_name, " ", m.last_name) AS Manager
FROM employee e
LEFT JOIN roles r
    ON e.role_id = r.rol_id
LEFT JOIN department d
    ON r.department_id = d.dep_id
LEFT JOIN employee m
    ON m.emp_id = e.manager_id
ORDER BY `Last Name` ASC
*/

/* Query for Budget
SELECT 
    d.dep_id AS `Department ID`, 
    d.dep_name as `Department Name`, 
    CONCAT(FORMAT(SUM(r.salary),0)) AS Budget
FROM employee 
    AS e
LEFT JOIN roles 
    AS r
	ON e.role_id = r.rol_id
LEFT JOIN department 
    AS d
    ON d.dep_id = r.department_id
GROUP BY d.dep_id, d.dep_name
*/

/* Query for View All Departments
SELECT 
    dep_id AS `Department Id`,
    dep_name AS `Department Name`
FROM department
ORDER 
    BY `Department Name` ASC

/* Query for View All Roles
SELECT 
    r.rol_id AS `Role ID`, 
    r.title AS Title, 
    FORMAT(r.salary,0) AS Salary, 
    d.dep_name AS `Department Name`
FROM roles 
    AS r 
INNER JOIN department AS d 
    ON r.department_id = d.dep_id 
ORDER 
    BY `Department Name` ASC

/* Query for View Employees by Department
SELECT 
    e.emp_id AS `Employee ID`, 
    e.first_name AS `First Name`, 
    e.last_name AS `Last Name`, 
    r.title AS Title, 
    d.dep_name AS Department 
FROM employee 
    AS e
JOIN roles 
    AS r
	ON e.role_id = r.rol_id
JOIN department 
    AS d
    ON d.dep_id = r.department_id
WHERE d.dep_id = ?
