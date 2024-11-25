#!/bin/zsh

cat package.json | tr -d " \"," | grep -E "version\:[0-9\.]+"

