angabe: deps clean check
	zip -y -r ~/Downloads/angabe.zip .

deps: test-obfuscated.js lsg.js

test-obfuscated.js: ../LSG/test.js
	npx javascript-obfuscator '$^' -o $@

test.js: ../LSG/test.js
	ln -s  '$^' $@

lsg.js:
	ln -s ../LSG/lsg.js $@

clean:
	@rm -rf node_modules
	@rm -f package-lock.json
	@rm -f lsg.js
	@rm -rf tmp
	@rm -f test.js
	@rm -f ~/Downloads/angabe.zip

check:
	./check.sh

run: deps
	npm run lsg

dev: lsg.js test.js
	npm run devlsg

devplf: lsg.js test.js
	npm run devplf

plf: deps
	npm start



