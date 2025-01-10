SELECT
    *
FROM
    cinema
WHERE
    description <> 'langweilig'
    AND (id % 2 == 1)
ORDER BY
    rating DESC;

SELECT
    p.personid,
    p.firstname,
    p.lastname,
    city,
    state
FROM
    person p
    LEFT JOIN address a ON p.personid = a.personid;