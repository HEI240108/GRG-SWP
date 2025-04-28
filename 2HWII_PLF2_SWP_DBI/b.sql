SELECT
    c.CustomerName,
    COUNT(o.OrderID) AS OrderCount
FROM
    Customers c
    LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY
    c.CustomerName;