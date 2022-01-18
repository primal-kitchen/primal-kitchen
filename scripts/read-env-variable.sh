# wanting to read the value of a variable. don't need to set it on the local shell, this is for use in other scripts
# found on here: https://gist.github.com/judy2k/7656bfe3b322d669ef75364a46327836

# ensure variable name is provided
VARIABLE_NAME=$1
if [ -z "$1" ]; then
    echo "environment variable name is required"
    exit 1
fi

# default to .env for file name but can override
ENV_FILE='.env'
if [ ! -z "$2" ]; then
   ENV_FILE="$2"
fi

# clueless about these 2 lines really. xargs -0 is needed for spaces in variables i think?
VARIABLE=$(grep $VARIABLE_NAME $ENV_FILE | xargs -0)
IFS="=" read -ra VARIABLE <<< "$VARIABLE"
echo ${VARIABLE[1]}
