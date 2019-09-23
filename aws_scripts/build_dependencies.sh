#!/bin/bash
npmmodules=(express hbs)

cd "$(dirname "$0")"/../source
sudo npm install forever -g #lets the webserver run in the background
                            #as a daemon

for package in ${npmmodules[@]}; do
    npm install $package
done