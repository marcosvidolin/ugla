#!/bin/sh

config() {
  printf "//`node -p \"require('url').parse('https://registry.npmjs.org').host\"`/:_authToken=${NPM_TOKEN}\nregistry=${NPM_REGISTRY_URL:-https://registry.npmjs.org}\n" >> ~/.npmrc
}

install() {
  npm install -g @angular/cli@7.1.4
  npm install
}

build() {
  cd projects/ugla/
  npm version patch
  cd ../..
  npm version patch
  node version.js
  ng build --project=ugla
  if [[ `git status --porcelain` ]]; then git add . && git commit -m "Changes build"; fi
  cp -r projects/ugla/src/sass dist/sass
  cp LICENSE dist/
}

publish() {
  cd dist
  npm publish
}

config
install
build
publish
