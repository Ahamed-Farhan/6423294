BEGIN
  FOR c IN (
    SELECT l.LoanID, l.enddate , cu.name
    FROM Loans l
    JOIN Customers cu ON l.CustomerID = cu.CustomerID
    WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE('Dear ' || c.Name || ', your loan is due on ' || TO_CHAR(c.EndDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
/
