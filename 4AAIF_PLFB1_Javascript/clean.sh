#!/bin/sh
for i in ?.sql grg.js plf.js; do
    echo >$i
done
echo "Now copy this folder and GIT RESET --HARD # git reset --hard"
