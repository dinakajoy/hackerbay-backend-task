const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

const dataToResize = { imageUrl: 'https://images.pexels.com/photos/4384858/pexels-photo-4384858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' };

describe('a POST request to "/resize-image"', () => {
  it('should notify user if not authenticated before resizing image', (done) => {
    chai.request(app)
      .post('/api/resize-image')
      .send(dataToResize)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal('You are not authenticated');
        done();
      });
  });

  it('should notify user if token is expired', (done) => {
    chai.request(app)
      .post('/api/resize-image')
      .set({ Authorization: process.env.EXPIRED_TOKEN })
      .send(dataToResize)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal('Sorry, expired token. Please Signin');
        done();
      });
  });

  it('should notify user if wrong data is entered', (done) => {
    const wrongData = { imageUrl: 'sss' };
    chai.request(app)
      .post('/api/resize-image')
      .set({ Authorization: process.env.TOKEN })
      .send(wrongData)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body.error[0].imageUrl).to.equal('Invalid value');
        done();
      });
  });

  it('should check if user is authenticated before resizing image', (done) => {
    chai.request(app)
      .post('/api/resize-image')
      .set({ Authorization: process.env.TOKEN })
      .send(dataToResize)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.a('string');
        done();
      });
  });
});
