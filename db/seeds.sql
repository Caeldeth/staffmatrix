INSERT INTO department (dep_name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("PMO"),
    ("Service"),
    ("QA"),
    ("ELT");

INSERT INTO roles (title, salary, department_id)
VALUES
   ("Dir-Sales", 120000, 1),
   ("Mgr-Regional", 80000, 1),
   ("Assc - Sales Desk", 40000, 1),
   ("Dir-Eng", 160000, 2),
   ("Sr Sys Engineer", 110000, 2),
   ("Sys Engingeer", 90000, 2),
   ("Dir-LFO", 150000, 3),
   ("Sr Staff Actuary", 90000, 3),
   ("Actuary-I", 60000, 3),
   ("Dir-Counsel", 220000, 4),
   ("Counsel", 160000, 4),
   ("Paralegal", 30000, 4),
   ("Dir-PMO", 160000, 5),
   ("Sr Project Manager", 110000, 5),
   ("Project Coordinator", 70000, 5),
   ("Dir-Service", 80000, 6),
   ("Customer Expert", 30000, 6),
   ("Cust Prof-I", 22000, 6),
   ("Dir-QA", 130000, 7),
   ("Bus Sys Analyst-II", 85000, 7),
   ("Bus Sys Analyst-I", 60000, 7),
   ("CEO", 400000, 8),
   ("Vice President", 300000, 8),
   ("Admin Assistant", 40000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Reginald", "Vanderbilt", 1, 40),
    ("Andrea", "Bratislava", 2, 1),
    ("Julia", "Sugarbaker", 2, 1),
    ("Anita", "Smith", 3, 1),
    ("Rodney", "Dangerfield", 3, 1),
    ("Rajesh", "Pillai", 4, 42),
    ("Chad", "Bimler", 5, 6),
    ("Aften", "Olson", 5, 6),
    ("Salil", "Bajpai", 6, 6),
    ("Jumana", "LeVay", 7, 41),
    ("Tammy", "Perrick", 8, 11),
    ("Kristie", "Smeld", 8, 11),
    ("Roger", "Wilson", 9, 11),
    ("Aliyah", "Rogers", 9, 11),
    ("Joann", "Fabrique", 10, 39),
    ("Dick", "Spartinggud", 11, 15),
    ("Bestia", "Ba'hai", 11, 15),
    ("LeAnne", "Chin", 12, 15),
    ("Murphy", "Slaw", 13, 42),
    ("Raen", "Kandall", 14, 19),
    ("Justine", "Piazza", 14, 19),
    ("Thomas", "Cole", 14, 19),
    ("Dana", "Ulmstead", 15, 19),
    ("Wendy", "Reilly", 16, 43),
    ("Jim", "Feesl", 17, 16),
    ("Jane", "Fonda", 17, 16),
    ("Osmosis", "Jones", 17, 16),
    ("Linda", "Lee", 18, 16),
    ("Clark", "Kent", 18, 16),
    ("Bruce", "Wayne", 18, 16),
    ("Andy", "Dick", 18, 16),
    ("Virgil", "Hawkins", 18, 16),
    ("Carter", "Hall", 18, 16),
    ("John", "Stewart", 19, 42),
    ("Ororo", "Monroe", 20, 34),
    ("Kitty", "Pryde", 20, 34),
    ("Alan", "Scott", 21, 34),
    ("Jackson", "Hyde", 21, 34),
    ("Snidely", "Whiplash", 22, NULL),
    ("Miles", "Morales", 23, 39),
    ("David", "Zavimbe", 23, 39),
    ("Al", "Simmons", 23, 39),
    ("Tim", "Drake", 23, 39),
    ("Arthur", "Anderson", 24, 39);