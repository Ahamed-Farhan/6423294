BEGIN
  FOR c IN (
    SELECT l.LoanID, l.InterestRate
    FROM Loans l
    JOIN Customers cu ON l.CustomerID = cu.CustomerID
    WHERE MONTHS_BETWEEN(SYSDATE, cu.DOB) / 12 > 60
  )
  LOOP
    UPDATE Loans
    SET InterestRate = c.InterestRate - (c.InterestRate * 0.01)
    WHERE LoanID = c.LoanID;
  END LOOP;
  
  DBMS_OUTPUT.PUT_LINE('Discount applied to senior customers.');
END;
/
