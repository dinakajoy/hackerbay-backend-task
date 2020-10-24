# hackerbay-backend-task

## Description
A task is to build a simple stateless microservice in Nodejs, with three major functionalities - Authentication, JSON patching, Image Thumbnail Generation

## Installation
Clone the repository and cd into the project directory
Run npm install to install all project dependencies
Create .env file and add your details following the .env-example file
Run npm run dev-server to start local server which will run on localhost:5500

## Usage
### API Endpoints

**User Authentication**
- POST `api/auth/signin` to signin into account

**To Patch Object**
- POST `api/patch-object`
Authorization: JSON Web Token

**To Transform Image**
- POST `api/resize-image`

## Running the tests
To run test:
npm test
npm run coverage - to get coverage summary

## Built With
Node/Express - The web framework used

## Swagger API Documentation
Access api documentation via [link](https://api-teamwork-by-joy.herokuapp.com/docs/v1)

## Api Frontend
Access api front end via [link](https://odinaka-joy.github.io/my-portfolio/)

## Contributing:
To contribute, raise an issue and it will be reviewed

## Author
[Odinaka Joy](http://dinakajoy.com)

## License
This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) file for details