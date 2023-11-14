#! /bin/bash

export NODE_ENV=production

export NUXT_APP_BASE_URL=/web-ui-widgets/
export NUXT_APP_BUILD_ASSETS_DIR=assets

export API_URL=https://api.game-values.com
export OPENAPI_URL=http://game-values.com:1080/api/v1/openapi.json

declare -r __dist=dist
declare -r __images=images

declare -r __old_images=${__dist}/${__images}
declare -r __new_images=${__dist}${NUXT_APP_BASE_URL}${__images}

declare -r __old_assets=${__dist}/${NUXT_APP_BUILD_ASSETS_DIR}
declare -r __new_assets=${__dist}${NUXT_APP_BASE_URL}${NUXT_APP_BUILD_ASSETS_DIR}

exec
    npx nuxi generate &&

    # some hack for mv nuxi static assets & images
    mkdir -p ${__dist}${NUXT_APP_BASE_URL} &&

    # used cp to work & test locally
    cp -r ${__old_images} ${__new_images} &&
    cp -r ${__old_assets} ${__new_assets} &&

    # deploy on gh-pages
    npx push-dir --dir=dist --branch=gh-pages --cleanup --force
