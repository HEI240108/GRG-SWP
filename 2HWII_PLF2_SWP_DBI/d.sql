SELECT
    e.FirstName,
    e.LastName
FROM
    Employees e
    LEFT JOIN Orders o ON e.EmployeeID = o.EmployeeID
WHERE
    o.OrderID IS NULL;