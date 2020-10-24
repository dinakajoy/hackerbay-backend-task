const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

const patchData = {
  objectToPatch: {
    firstName: 'Albert',
    contactDetails: {
      phoneNumbers: []
    }
  },
  patchToApply: {
    op: 'replace',
    path: '/firstName',
    value: 'Joachim'
  }
};

describe('a PATCH request to "/apply-patch"', () => {
  it('should notify user if not authenticated before applying patch', (done) => {
    chai.request(app)
      .patch('/api/apply-patch')
      .send(patchData)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal('You are not authenticated');
        done();
      });
  });

  it('should notify user if token is expired', (done) => {
    chai.request(app)
      .patch('/api/apply-patch')
      .set({ Authorization: process.env.EXPIRED_TOKEN })
      .send(patchData)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal('Sorry, expired token. Please Signin');
        done();
      });
  });

  it('should check if user is authenticated before applying patch', (done) => {
    chai.request(app)
      .patch('/api/apply-patch')
      .set({ Authorization: process.env.TOKEN })
      .send(patchData)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.a('object');
        done();
      });
  });
});
