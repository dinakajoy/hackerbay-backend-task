const Helpers = require('../util/Helpers');

module.exports = async (request, response, next) => {
  const userToken = request.headers.authorization;
  if (!userToken) {
    response.status(401).json({
      status: 'error',
      error: 'You are not authenticated'
    });
  } else {
    const verifiedToken = await Helpers.verifyToken(userToken);
    if (verifiedToken === 'jwt expired') {
      response.status(401).json({
        status: 'error',
        error: 'Sorry, expired token. Please Signin'
      });
    } else if (verifiedToken.error) {
      response.status(400).json({
        status: 'error',
        error: 'Please ensure you used the correct token'
      });
    } else {
      next();
    }
  }
};
