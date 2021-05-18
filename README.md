1. Run `npm install`
2. Run `npm run build`
3. Edit the `example.txt` file
4. Run `npm run build` again. Notice that the output CSS (`dist/main.css`) contains the **old** contents of `example.txt`. This is because `example.txt` was not registered as a dependency.
5. Now uncomment lines 37-42 of `webpack.config.js`. This registers the dependency.
6. Run `npm run build`
7. Edit the `example.txt` file
8. Run `npm run build` again. Notice that the output CSS (`dist/main.css`) has updated **correctly** this time.
