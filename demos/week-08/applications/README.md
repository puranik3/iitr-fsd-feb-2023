# Steps to setup the app

- Create a folder (`applications/`)
- Create `package.json`
```
npm init -y
```
- Installing `http-server`
```
npm i http-server
```
- Add the following to `package.json` `scripts` section
```
"scripts": {
    "start": "http-server -c-1"
},
```
- Run the server
```
npm run start
```