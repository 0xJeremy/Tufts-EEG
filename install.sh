echo "Pulling Repository..."
git pull
echo "Install modules..."
cd node && npm install && cd ..
echo "Finished Installation."