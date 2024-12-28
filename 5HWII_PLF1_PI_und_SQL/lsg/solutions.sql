-- never order:
select
    *
from
    customers
where
    id not in (
        select
            customerid
        from
            orders
    );

-- delete duplicate emails
delete from person
where
    id = (
        select
            max(id)
        from
            person
        where
            email = (
                select
                    email
                from
                    person
                group by
                    email
                having
                    count() > 1
            )
    );