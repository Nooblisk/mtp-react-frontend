
## Deploying React Applications to Github Pages

+ `npm i --save gh-pages`  
+ Locate the `package.json` file in your root directory, add this line of code to your script: `"homepage": "link-to-your-repository"`  
+ In your `package.json` file, locate “scripts” add these lines of code:  
````
{  
    ...  
    "predeploy": "npm run build",  
    "deploy": "gh-pages -d build",  
    ...  
 }  
````
+  `npm run deploy`  


#### Issues and notes:  

---
Issue: could not read Username for 'https://github.com': Invalid argument  
Solution: `git remote set-url https://<username>:<password>@github.com/<username>/<repo_name>.git`  
---
Issue: A branch named 'gh-pages' already exists  
Solution: `rm -rf node_modules/gh-pages/.cache`  
---
Issue: Building does not set relative paths to the assets in `static` folder  
Solution: `homepage` in package.json for html and use absolute path in js like `src={process.env.PUBLIC_URL + '/assets/images/topBg.jpg'}`  
---
Note: routing using on gh-pages does not work well with BrowserRouter or ReactRouter  
