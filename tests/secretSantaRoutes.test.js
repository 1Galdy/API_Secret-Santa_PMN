// tests/secretSantaRoutes.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Secret Santa API', () => {
    // Test GET /secret-santa
    it('should GET all secret santa assignments', (done) => {
        chai.request(app)
            .get('/secret-santa')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Test POST /secret-santa
    it('should POST a new secret santa assignment', (done) => {
        const assignment = {
            groupId: '605c72ef8d1d4c001f8b4567',
            fromUserId: '605c72ef8d1d4c001f8b1234',
            toUserId: '605c72ef8d1d4c001f8b5678',
            year: 2024
        };
        chai.request(app)
            .post('/secret-santa')
            .send(assignment)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('groupId').eql(assignment.groupId);
                res.body.should.have.property('fromUserId').eql(assignment.fromUserId);
                res.body.should.have.property('toUserId').eql(assignment.toUserId);
                res.body.should.have.property('year').eql(assignment.year);
                done();
            });
    });
});
