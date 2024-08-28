default: clean

clean:
	rm -rf kolloquium/Angabe.*
	rsync -av --ignore-existing --exclude='node_modules' mine/ kolloquium/
	rm -rf kolloquium/node_modules
	rm -rf kolloquium/prisma/dev.db
	rm -rf kolloquium/package-lock.json

zip: clean
	zip -r kolloquium.zip kolloquium