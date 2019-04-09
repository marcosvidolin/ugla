#!/bin/sh

config() {
  printf "//`node -p \"require('url').parse('https://registry.npmjs.org').host\"`/:_authToken=${NPM_TOKEN}\nregistry=${NPM_REGISTRY_URL:-https://registry.npmjs.org}\n" >> ~/.npmrc
}

install() {
  npm install -g @angular/cli@7.1.4
  npm install
}

build() {
  cd projects/lotus/
  npm version patch
  cd ../..
  node version.js
  ng build --project=lotus
  if [[ `git status --porcelain` ]]; then git add . && git commit -m "Changes build"; fi
  npm version patch
  cp -r projects/lotus/src/sass dist/sass
}

publish() {
  cd dist
  npm publish
}

config
install
build
publish
