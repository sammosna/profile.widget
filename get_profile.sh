#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

dscl . -read $HOME JPEGPhoto | tail -1 | xxd -r -p > "$DIR/profile.jpg"