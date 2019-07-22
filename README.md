# Introducing Jest
## 1. Prerequisites
- Install *node*  https://nodejs.org/en/download/  
```bash
$ node -v
v10.16.0
```
- Install and *npm* https://www.npmjs.com/get-npm
```bash
$ npm -v
6.9.0
```

## 2. Creating a Node Project
```bash
$ mkdir tdd-roman-numerals-kata
$ cd tdd-roman-numerals-kata
```

### 2.1. Create *package.json* with `npm init`.   
Press ↩️ at each prompt to accept the default response

```bash
$ npm init
...
package name: (tdd-roman-numerals-kata) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
...
Is this OK? (yes)
```
Add `"private": true` to *package.json* to npm will refuse to publish it (this is a way to prevent accidental publication of private repositorie)

### 2.2. Add Jest as Dependency  
Use npm to install the jest package
 ```bash
$ npm install --save-dev jest@24.8.0
npm notice created a lockfile as package-lock.json. You should commit this file.
+ jest@24.8.0
added 479 packages from 344 contributors and audited 873786 packages in 12.856s
found 0 vulnerabilities
```
## 3. Running Package Binaries with npx
npm is a package manager, npx is a package runner.        
```bash
$ npx jest
No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In ~/tdd-roman-numerals-kata
  2 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 2 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```
```bash
$ npx jest --version
24.8.0
```
## 4. Running Project Scripts with npm
The best way to do that is to list those commands in the scripts section of your project’s `package.json`.
```json
{
  "name": "tdd-roman-numerals-kata",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  }
}
```        
```bash
$ npm test
> tdd-roman-numerals-kata@1.0.0 test ~/tdd-roman-numerals-kata
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In ~/tdd-roman-numerals-kata
  2 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 2 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
npm ERR! Test failed.  See above for more details.
```

## 5. Writing a test
Create a file called *src/tests/romanNumerals.test.js* :
```js
const arabicToRoman = arabic => `I`;

describe('arabicToRoman()', () => {
  it('convert number one', () => {
    expect(arabicToRoman(1)).toBe('I');
  });
});
```
Run all tests with:
```bash
$ npm test
...
 PASS  src/tests/romanNumerals.test.js
  arabicToRoman()
    ✓ convert number one (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.624s, estimated 1s
Ran all test suites.
```

## 6. Test-Driven Development
### 6.1. Starting from Failure
Create *src/romanNumerals.js* file:
```js
module.exports = (number) => 'I';
```
And chage the *src/tests/romanNumerals.test.js*:
```js
const arabicToRoman = require('../romanNumerals');

describe('arabicToRoman()', () => {
  it('convert number one', () => {
    expect(arabicToRoman(1)).toBe('I');
  });
  it('convert number two', () => {
    expect(arabicToRoman(2)).toBe('II');
  });
});
```
### 6.2. Running Jest Tests Automatically
```bash
$ npx jest --watchAll
```
### 6.3 Measuring Test Coverage
```bash
$ npm run test -- --coverage --coverageReporters=text
```