CREATE OR REPLACE PROCEDURE TransferFunds (
  amnt     IN NUMBER,
  sender   IN Accounts.AccountID%TYPE,
  receiver IN Accounts.AccountID%TYPE
)
IS
  sender_balance  NUMBER;
  receiver_exists NUMBER;
BEGIN
  SELECT Balance INTO sender_balance
  FROM Accounts
  WHERE AccountID = sender;
  SELECT COUNT(*) INTO receiver_exists
  FROM Accounts
  WHERE AccountID = receiver;

  IF receiver_exists = 0 THEN
    DBMS_OUTPUT.PUT_LINE('Receiver account does not exist.');
    RETURN;
  END IF;

  IF sender_balance >= amnt THEN
    UPDATE Accounts
    SET Balance = Balance - amnt
    WHERE AccountID = sender;
    
    UPDATE Accounts
    SET Balance = Balance + amnt
    WHERE AccountID = receiver;

    DBMS_OUTPUT.PUT_LINE('Amount transferred successfully.');
  ELSE
    DBMS_OUTPUT.PUT_LINE('Insufficient balance.');
  END IF;
  
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Sender account not found.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
END;
/
