#remove static file
cd ..
rm -rf static

# build and move static => next

cd react-app
npm run build
mv ./build/static ..