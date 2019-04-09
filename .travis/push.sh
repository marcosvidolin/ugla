#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b new-version
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git push origin --all
  git request-pull new-version https://github.com/ciandt-dev/ugla master
  git push origin new-version:master
}

setup_git
commit_website_files
upload_files
