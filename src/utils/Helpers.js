const jwt = require('jsonwebtoken');
require('dotenv').config();

class Helpers {
  static async generateToken(data) {
    try {
      const res = await jwt.sign({ data }, process.env.SECRET_TOKEN, {
        expiresIn: '24h',
      });
      return res;
    } catch (error) {
      return error.message;
    }
  }

  static async verifyToken(token) {
    try {
      const res = await jwt.verify(token, process.env.SECRET_TOKEN);
      return res;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = Helpers;
