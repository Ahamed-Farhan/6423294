CREATE or REPLACE PROCEDURE UpdateEmployeeBonus(dept IN Employees.Department%TYPE, bonus IN number)
IS
BEGIN 
FOR c IN(
  SELECT Salary, EmployeeID
  FROM Employees
  WHERE Department = dept
  )
  LOOP
    UPDATE Employees
    SET Salary = c.Salary + (c.Salary * bonus / 100)
    WHERE EmployeeID = c.EmployeeID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Bonus Added to the Departments Successfully');
END;
/