CREATE or REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN 
FOR c IN(
  SELECT Balance, AccountID
  FROM Accounts
  WHERE AccountType = 'Savings'
  )
  LOOP
    UPDATE Accounts
    SET Balance = c.balance+(c.balance/100)
    WHERE AccountID = c.AccountID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Interest Applied to all Savings Account');
END;
/