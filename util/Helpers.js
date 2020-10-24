const jwt = require('jsonwebtoken');
require('dotenv').config();

class Helpers {
  static async generateToken(data) {
    const res = await jwt.sign({ data }, process.env.SECRET_TOKEN, {
      expiresIn: '24h',
    });
    return res;
  }

  static async verifyToken(token) {
    const res = await jwt.verify(token, process.env.SECRET_TOKEN);
    return res;
  }
}

module.exports = Helpers;
