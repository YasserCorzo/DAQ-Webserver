#!/bin/bash
cd "$(dirname "$0")"/../source
forever stopall
forever start -o info.log -e error.log index.js 