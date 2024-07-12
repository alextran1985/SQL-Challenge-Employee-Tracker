INSERT INTO employee (id,first_name,last_name,title,department,salary,manager)

VALUES 
(1,'John','Doe','Sales Lead','Sales',100000, null),
(2,'Mike','Chan','Salesperson','Sales',90000, 'John Doe'),
(3,'Ashley','Rodriquez','Lead Engineering','Engineering',150000, null),
(4,'Kevin','Tupik','Software Engineer','Engineering',120000, 'Ashley Rodriquez'),
(5,'Kunal','Singh','Account Manager','Finance',160000, null),
(6,'Malia','Brown','Accountant','Finance',125000, 'Kunal Singh'),
(7,'Sarah','Lourd','Legal Team Lead','Legal',250000, null),
(8,'Tom','Allen','Lawyer','Legal',100000, 'Sarah Lourd');

SELECT * FROM employee;

