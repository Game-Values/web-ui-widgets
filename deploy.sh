#! /bin/bash

set -a
source .env.gh-pages
set +a

# https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/
npx nuxi generate --dotenv .env.gh-pages
grep -rnwl "<link rel=\"prefetch\"" .output/public | xargs sed -i 's$<link rel="prefetch" href="[^"]*\.\(jpg\|png\|webm\|jpeg\|ttg\|svg\|gif\)">$$g'
touch .output/public/.nojekyll
npx push-dir --dir=.output/public --branch=gh-pages --cleanup --force --verbose
