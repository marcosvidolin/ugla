#!/bin/sh

config() {
  printf "//`node -p \"require('url').parse('https://registry.npmjs.org').host\"`/:_authToken=${NPM_TOKEN}\nregistry=${NPM_REGISTRY_URL:-https://registry.npmjs.org}\n" >> ~/.npmrc
}

install() {
  npm install -g @angular/cli@7.1.4
  npm install
}

build() {
  node -e 'require("./version").changeConfig()';
  ng build --project=ugla
  if [[ `git status --porcelain` ]]; then
    git checkout -b trevis-version
    git add .
    git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
    git request-pull trevis-version https://github.com/ciandt-dev/ugla master
    git push origin trevis-version:master
  fi
  cp -r projects/ugla/src/sass dist/sass
  cp LICENSE dist/
}

publish() {
  cd dist
  npm publish
}

# config
# install
build
# publish
