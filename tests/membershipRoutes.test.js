// tests/membershipRoutes.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Membership API', () => {
    // Test GET /memberships
    it('should GET all memberships', (done) => {
        chai.request(app)
            .get('/memberships')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Test POST /memberships
    it('should POST a new membership', (done) => {
        const membership = {
            groupId: '605c72ef8d1d4c001f8b4567',
            userId: '605c72ef8d1d4c001f8b1234'
        };
        chai.request(app)
            .post('/memberships')
            .send(membership)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('groupId').eql(membership.groupId);
                res.body.should.have.property('userId').eql(membership.userId);
                done();
            });
    });
});
