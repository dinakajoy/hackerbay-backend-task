const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

describe('On This Api', () => {
  before(() => {
    app.set('Access-Control-Allow-Origin', '*');
    app.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    app.set('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  });

  describe('a GET request to "/" route', () => {
    it('should return a json object', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.be.eq(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('a request to wrong route eg: /sssss', () => {
    it('should return an error as json object', (done) => {
      chai.request(app)
        .get('/sssss')
        .end((err, res) => {
          expect(res.status).to.be.eq(404);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});
