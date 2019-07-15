#!/bin/sh

install() {
  npm install -g firebase-tools
  npm install -g @angular/cli@7.1.4
  npm install -g compodoc
  npm install
}

build() {
  ng build --prod
  compodoc -p projects/ugla/tsconfig.lib.json -d dist/prd/docs/ --theme material
}

deploy() {
  firebase deploy --token $FIREBASE_TOKEN
}

install
build && deploy
