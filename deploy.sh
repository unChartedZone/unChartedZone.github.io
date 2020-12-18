#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# Copy CNAME to dist folder
cp ./CNAME ./dist

# Copy README to dist folder
cp ./README.md ./dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:unChartedZone/unChartedZone.github.io.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
