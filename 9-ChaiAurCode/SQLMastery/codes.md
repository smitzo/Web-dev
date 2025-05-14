/* ----------------------DAY 1-----------------------------------------------------
-- WRITE COMMANDS IN CAPITAL LETTERS AND DB NAME IN small letters
-- Creating the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS techforallwithsmit;

-- Displaying all databases
SHOW DATABASES;

-- Using the techforallwithsmit database
USE techforallwithsmit;

-- Displaying the current database
SELECT database();

-- Creating the employee table
CREATE TABLE IF NOT EXISTS employee (
    EID INT AUTO_INCREMENT, -- Auto incrementing ID starting from 1
    FirstName VARCHAR(50) NOT NULL, -- Employee's first name
    LastName VARCHAR(50) NOT NULL, -- Employee's last name
    Age INT NOT NULL, -- Employee's age
    Salary INT NOT NULL, -- Employee's salary
    Location VARCHAR(50) NOT NULL, -- Employee's location
    PRIMARY KEY (EID) -- Primary key uniquely identifies the record
);

-- Displaying all tables in the current database
SHOW TABLES;

-- Describing the structure of the employee table
DESC employee;

-- Inserting values into the employee table
INSERT INTO employee (FirstName, LastName, Age, Salary, Location)
VALUES
    ("smit", "joshi", 21, 200000, "hyderabad"),
    ("shivam", "joshi", 25, 500000, "hyderabad"),
    ("harsh", "joshi", 25, 400000, "blr"),
    ("jay", "joshi", 24, 500000, "blr"),
    ("vedika", "thakor", 18, 20000, "vad"),
    ("harshika", "thakor", 5, 10000, "vad");

-- Selecting all records from the employee table
SELECT * FROM employee;

-- Selecting employees with salary greater than 100,000
SELECT * FROM employee WHERE Salary > 100000;

-- Selecting the first name and last name of employees with salary greater than 100,000
SELECT FirstName, LastName FROM employee WHERE Salary > 100000;

-- Selecting employees with age less than or equal to 21
SELECT * FROM employee WHERE Age <= 21;

-- Updating vs Alter commands
-- UPDATE updates/manipulates information record inside table (DML)
-- ALTER updates/defines database schema by changing table structure (DDL)

-- Updating the LastName of the employee with EID=1
UPDATE employee SET LastName = "singh" WHERE EID = 1;

-- Delete vs Drop commands
-- DELETE updates/manipulates information record inside table by deleting a data record from table (DML)
-- DROP updates/defines database schema by removing table or removing whole db (DDL)

-- Deleting the record of the employee with EID=2
DELETE FROM employee WHERE EID = 2;

-- Dropping the employee table
DROP TABLE employee;
*/

/* ------------------------------DAY 2----------------------------------------------
-- Displaying all databases
SHOW DATABASES;

-- Using the techforallwithsmit database
USE techforallwithsmit;

-- Displaying all tables in the current database
SHOW TABLES;

-- Creating the Courses table
CREATE TABLE IF NOT EXISTS Courses (
    courseID INT AUTO_INCREMENT, -- Auto incrementing course ID
    courseName VARCHAR(50) NOT NULL, -- Name of the course
    course_duration_months INT NOT NULL, -- Duration of the course in months
    courseFee INT NOT NULL, -- Fee for the course
    PRIMARY KEY(courseID) -- Primary key uniquely identifies the record
);

-- Describing the structure of the Courses table
DESC Courses;

-- Inserting values into the Courses table
INSERT INTO Courses (courseName, course_duration_months, courseFee)
VALUES
    ("Excel", 3, 1500),
    ("DSA", 2, 5000),
    ("SQL", 1, 3000);

-- Selecting all records from the Courses table
SELECT * FROM Courses;

-- Creating the Learners table
CREATE TABLE IF NOT EXISTS Learners (
    LearnerID INT AUTO_INCREMENT, -- Auto incrementing learner ID
    LearnerFirstName VARCHAR(50) NOT NULL, -- Learner's first name
    LearnerLastName VARCHAR(50) NOT NULL, -- Learner's last name
    LearnerPhoneNumber VARCHAR(13) NOT NULL, -- Learner's phone number
    LearnerEmailID VARCHAR(50) NOT NULL, -- Learner's email ID
    LearnerEnrollmentDate TIMESTAMP NOT NULL, -- Date of learner's enrollment
    SelectedCourses INT NOT NULL, -- ID of the selected course, must refer to courseID in Courses table
    YearsOfExperience DECIMAL NOT NULL, -- Years of experience the learner has
    LearnerSOJ VARCHAR(15), -- Source of joining (SOJ)
    Batch_Start_Date TIMESTAMP NOT NULL, -- Start date of the batch
    Location VARCHAR(50), -- Learner's location
    PRIMARY KEY(LearnerID), -- Primary key uniquely identifies the record
    UNIQUE KEY(LearnerEmailID), -- Ensures learner's email ID is unique
    FOREIGN KEY(SelectedCourses) REFERENCES Courses(courseID) -- Foreign key to ensure valid course selection
);

-- Describing the structure of the Learners table
DESC Learners;

-- Inserting values into the Learners table
INSERT INTO Learners (
    LearnerFirstName, LearnerLastName, LearnerPhoneNumber, LearnerEmailID, LearnerEnrollmentDate, SelectedCourses, YearsOfExperience, LearnerSOJ, Batch_Start_Date, Location
)
VALUES
    ('John', 'Doe', '+1234567890', 'john.doe@example.com', NOW(), 1, 3.5, 'Referral', '2024-08-01', 'New York'),
    ('Jane', 'Smith', '+0987654321', 'jane.smith@example.com', NOW(), 2, 1.0, 'Online', '2024-08-01', 'Los Angeles'),
    ('Alice', 'Johnson', '+1122334455', 'alice.johnson@example.com', NOW(), 3, 5.0, 'Advertisement', '2024-08-01', 'Chicago'),
    ('Bob', 'Brown', '+2233445566', 'bob.brown@example.com', NOW(), 1, 2.0, 'Referral', '2024-08-01', 'Houston'),
    ('Eve', 'Davis', '+3344556677', 'eve.davis@example.com', NOW(), 2, 4.5, 'Online', '2024-08-01', 'Miami');

-- Selecting all records from the Learners table
SELECT * FROM Learners;
*/

/* -------------------Data Analysis [employee, Courses, Learners] -----------------------------

-- ORDER BY sorts the data in ascending order by default. ORDER BY DESC sorts data in descending order
-- LIMIT sets the limit on number of records. ex: if limit is 4 , query will show only 4 records
-- COUNT gives a count of all records which are not null (aggregate function)
-- Distinct gives unique/distinct count of records
-- LIKE is a wild card that does pattern matching
-- GROUP BY

-- 1. Give record of Employee with highest Salary
SELECT * FROM employee
ORDER BY Salary DESC
LIMIT 1;

--or  SELECT MAX(Salary) AS max_salary FROM employee

-- order of commands:  FROM -> SELECT -> ORDER BY -> LIMIT

-- 2. Give record of Employee with lowest Salary
SELECT * FROM employee
ORDER BY Salary
LIMIT 1;
-- or SELECT MIN(Salary) as min_salary FROM employee
-- order of commands:  FROM -> SELECT -> ORDER BY -> LIMIT

-- 3. Give record of Employees with highest Salary and Age<21
SELECT * FROM employee
WHERE Age<21
ORDER BY Salary DESC
LIMIT 1;
-- order of commands:  FROM -> WHERE-> SELECT-> ORDER BY -> LIMIT

-- 4. Display number of enrollments in techforallwithsmit
Select COUNT(*)  AS num_of_enrolments FROM Learners

-- 5. Display number of enrollments in courseID=3 SQL course
SELECT COUNT(*) AS num_of_enrolments_SQL
FROM Learners
WHERE SelectedCourses=3;

-- 6. Display number of enrollments in July month
SELECT COUNT(*) AS july_enrollments
FROM Learners
WHERE LearnerEnrollmentDate LIKE '%-07-%';

-- 7. Display number of enrollments in July month of 2024
SELECT COUNT(*) AS july_2024_enrollments
FROM Learners
WHERE LearnerEnrollmentDate LIKE '2024-07-%';

-- 8. Display total number of enrollments in 1st date of every month of 2024
SELECT COUNT(*) AS day1ofeveryMonth_enrollments
FROM Learners
WHERE LearnerEnrollmentDate LIKE '2024-%-01';

-- 9. Update John's year of experience to 27
UPDATE Learners
SET YearsOfExperience=27
WHERE LearnerID=2;

-- 10. Display distinct source of joinings
SELECT DISTINCT LearnerSOJ AS distinct_SOJ
FROM Learners

*/

/* -------------------------DAY-3-------------------------------------------------*/

/*
-- USE techforallwithsmit;

-- count number of students wrt source of joining
SELECT LearnerSOJ , COUNT(*) AS num_of_students
FROM Learners
GROUP BY LearnerSOJ  -- 1.if col1,col2col3 are non aggregated u want to GROUP BY col1,col2,col3  you also have to write SELECT  col1,col2,col3 before GROUP BY -- 2.GROUP BY is always used in conjuction with  aggregated columns
WHERE LearnerSOJ='Advertisement' OR LearnerSOJ='Referral';

 -- count number of students and GROUP BY location and source of joining

 -- 1 possible mistake is :

 SELECT LearnerSOJ , COUNT(*) AS num_of_students  -- after SELECT ive written SOJ but nit location
 FROM Learners
 GROUP BY LearnerSOJ,Location -- after GROUP BY ive written location also but this ll lead to error. so always use the column name after SELECT and GROUP BY both commands

SELECT LearnerSOJ , Location , COUNT(*) AS num_of_students
 FROM Learners
 GROUP BY LearnerSOJ,Location   -- 1.if col1,col2col3 are non aggregated u want to GROUP BY col1,col2,col3  you also have to write SELECT  col1,col2,col3 before GROUP BY
 -- 2.GROUP BY is always used in conjuction with  aggregated columns

 */

 -- corres
