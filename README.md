# hackerbay-backend-task

## Description
A task is to build a simple stateless microservice in Nodejs, with three major functionalities - Authentication, JSON patching, Image Thumbnail Generation

## Installation
Clone the repository and cd into the project directory
Run npm install to install all project dependencies
Create .env file and add your details following the .env-example file
Run npm run dev-server to start local server which will run on localhost:5000

## Usage
### API Endpoints

**User Authentication**
- POST `api/auth/signin` to signin into account

**To Patch Object**
- PATCH `api/apply-patch`
Authorization: JSON Web Token

**To Transform Image**
- POST `api/resize-image`
Authorization: JSON Web Token

## To Run Application
To run in development mode run: npm run devStart
To run in production mode run: npm start

## Running the tests
To run test:
npm test
npm run coverage - to get coverage summary

## Built With
Node/Express - The web framework used

## Swagger API Documentation
Access api documentation via [link]()

## Author
[Odinaka Joy](http://dinakajoy.com)

## License
This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) file for details
