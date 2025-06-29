BEGIN
  FOR c IN (
    SELECT CustomerID, Balance
    FROM Customers
    WHERE Balance > 10000
  )
  LOOP
    UPDATE Customers
    SET isVIP = 'Y'
    WHERE CustomerID = c.CustomerID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('VIP status updated for eligible customers.');
END;
/
