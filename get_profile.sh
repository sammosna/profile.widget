#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo $DIR

dscl . -read /Users/sammosna JPEGPhoto | tail -1 | xxd -r -p > $DIR/profile.jpg