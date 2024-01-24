default: test

test: test.js
	node test.js
	make clean

clean:
	rm -f test.js

test.js: plf.js dont_touch/grg.js
	cat $^ > $@