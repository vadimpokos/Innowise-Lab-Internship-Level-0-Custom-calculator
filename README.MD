# Innowise Lab Internship Level 0 Custom-calculator

## [task](https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/)

## [demo](https://vadimpokos.github.io/Innowise-Lab-Internship-Level-0-Custom-calculator/)

## How to run the app

1. Clone this repo

```
    $git clone https://github.com/vadimpokos/Innowise-Lab-Internship-Level-0-Custom-calculator.git
```

2. Open the directory in code editor
3. Run `$ npm install`
4. Run app with `$ npm webpack serve`

## npm scripts

### `test`

Runs the tests.\

### `build`

Builds the app for production to the `dist` folder.\

### `dev-server`

Runs the app on your localhost.\

## Folders structure

```
│
└───src
    │   bracketsHandler.js           # Function that finds expresison in brackets and returns a result
    │   calcConfig.js                # Buttons configured as a JS objects
    │   calculator.js                # Class calculator
    │   evaluate.js                  # Function that recieves postfix string and returns a result (can do + - * /)
    │   functionHandler.js           # Function that finds math functions in string and returns string with calculated result
    │   index.js                     # Main file where calculator mounts in DOM + event listener
    │   parser.js                    # Function that receives an infix string and returns postfix string
    │   functions.test.js            # Tests
    │
    └───styles
            style.css
```

## Application stack

### JS

### Jest

### Webpack
