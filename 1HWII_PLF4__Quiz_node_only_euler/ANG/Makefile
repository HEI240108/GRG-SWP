angabe: angabedeps clean check
	zip -y -x Makefile reihe.png check.sh test.js lsg.js -r ~/Downloads/angabe.zip .

angabedeps: test-obfuscated.js PLF.pdf

devdeps: lsg.js test.js

PLF.pdf: PLF.md
	false

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

run: devdeps
	npm run lsg

dev: devdeps
	npm run devlsg  # TODO move from package.json hereher

devplf: devdeps
	npm run devplf # TODO move from package.json hereher

plf: devdeps
	npm start # TODO move from package.json hereher



