const Helpers = require('../util/Helpers');

exports.signin = async (request, response) => {
  const { username, password } = request.body;
  try {
    const token = await Helpers.generateToken({ username, password });
    response.status(200).json({
      status: 'success',
      data: token
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};
