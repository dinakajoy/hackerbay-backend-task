const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

describe('a POST request to "api/auth/signin"', () => {
  it('should throw error if username is less than 3 characters', (done) => {
    const userDetails = {
      username: 'st',
      password: 'Admin@2019'
    };
    chai.request(app)
      .post('/api/auth/signin')
      .set('Accept', 'application/json')
      .send(userDetails)
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error[0].username).to.equal('Invalid value');
        done();
      });
  });

  it('should throw error if password is less than 5 characters', (done) => {
    const userDetails = {
      username: 'admin@gmail.com',
      password: 'stPw'
    };
    chai.request(app)
      .post('/api/auth/signin')
      .set('Accept', 'application/json')
      .send(userDetails)
      .end((err, res) => {
        expect(res).to.have.status(422);
        expect(res.body.error[0].password).to.equal('Invalid value');
        done();
      });
  });

  it('should signin a user if correct username and password', (done) => {
    const userDetails = {
      username: 'dinakajoy',
      password: 'Test@2020'
    };
    chai.request(app)
      .post('/api/auth/signin')
      .set('Accept', 'application/json')
      .send(userDetails)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.data).to.be.a('string');
        done();
      });
  });
});
