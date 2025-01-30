#!/bin/sh

GITHUB_TOKEN=$(cat ~/.github_token)

MIRRORS=(
    "https://zuedev:$GITHUB_TOKEN@github.com/zuedev/zue.dev.git"
)

# push to mirrors
for MIRROR in "${MIRRORS[@]}" ; do
    git push --mirror $MIRROR
done