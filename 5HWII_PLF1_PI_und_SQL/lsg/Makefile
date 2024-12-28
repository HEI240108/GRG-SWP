default: fresh

fresh: person.db customer.db

person.db::
	rm person.db
	sqlite3 person.db < persons.sql
	# sqlite3 person.db

customer.db::
	rm customer.db
	sqlite3 customer.db < customer.sql
	# sqlite3 customer.db