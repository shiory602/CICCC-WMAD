# How to create your own module.
This is tutorial of creating your own node module.
You can also read [this website](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
## Create a new module
1. Creating a folder
```
mkdir folder-name
```

2. Creating package.json file with following command
```
 npm init
```
This utility will walk you through creating a package.json file.
```
package name: (the name of your module) 
version: (1.0.0) /** default **/
description: description of your module
entry point: (index.js) 
test command: 
git repository: your git repository URL
keywords: keyword people search for
author: name <email@gmail.com> (your website)
license: (ISC) 
```

3. Creating your own module
Maybe you already have files, so just copy and paste it.
```js
exports.functionName = function() {
  /* processing */
}
```

4. Creating and adding a README.md file to a package
```
touch README.md
```
You can add the description of your module.

5. Publish your module
```
npm publish
```

## Update the module
1. Edit your module
Do not forget to push it on your GitHub.

2. Updating your version
```
npm version patch
```
Then, you can see current version
```
v1.0.1
```

3. Publishing your module
```
npm publish
```

## Test your module
1. Publish your package to npm:
2. On the command line, create a new test directory outside of your project directory.
```
mkdir test-directory
```
3. Switch to the new directory:
```
cd /path/to/test-directory
```
4. In the test directory, install your module:
```
npm install <your-module-name>
```
In the test directory, create a test.js file which requires your module and calls your module as a method.

On the command line, run `node test.js`.