# LAB - 03 api-server

### Deployment Test

#### Author: Elaine Huynh
 - tests report

 #### Setup
    **.env** requirements
    - PORT - 3001

    Running the app
    - npm start
    - Endpoint: /plant (with or without name query)
        - returns array with plant collection data

## Start
    - to run server npm i express sequelize sequelize-cli

## Routes
    - /plants   
        - GET, PUT, POST, DELETE for postgresDB plant table data
    - /pots
        - GET,PUT,POST,DELETE for postgresDB pots table data

#### Tests
    - Unit Tests: npm run test [filename]

#### UML

![UML](UML.png)


## Links
- Latest PR on GitHub: https://github.com/nurselaine/api-server/pull/4
- Heroku link: https://nurselaine-api-server.herokuapp.com/
