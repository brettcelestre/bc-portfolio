# Create a .env file and add the following
# BUCKET=s3://name-of-target-bucket
# ARCHIVE_PATH=name-of-archive-folder-in-parent-directory

echo "---------------------------------"
echo "       Starting build"
echo "---------------------------------"
source .env

echo "\n\n"

echo "---------------------------------"
echo "> 2/6 Updating dependencies"
npm install

echo "\n\n"

echo "---------------------------------"
echo "> 3/6 Building app"
npm run build

echo "\n\n"

echo "---------------------------------"
echo "> 4/6 Deleting contents of bucket"
aws s3 rm $BUCKET --recursive

echo "\n\n"

echo "---------------------------------"
echo "> 5/6 Uploading build to S3"
aws s3 cp build $BUCKET --recursive

echo "\n\n"

echo "---------------------------------"
echo "> 6/6 Archiving build"
DATE=$(date '+%m-%d-%Y')
ARCHIVE_FOLDER="build-${DATE}"
mv "/build" "../${ARCHIVE_PATH}"

echo "\n\n"


echo "---------------------------------"
echo "       Build Successful"
echo "---------------------------------"
