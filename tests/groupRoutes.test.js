// tests/groupRoutes.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Group API', () => {
    // Test GET /groups
    it('should GET all groups', (done) => {
        chai.request(app)
            .get('/groups')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Test POST /groups
    it('should POST a new group', (done) => {
        const group = {
            name: 'Test Group',
            description: 'A group for testing'
        };
        chai.request(app)
            .post('/groups')
            .send(group)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('name').eql(group.name);
                res.body.should.have.property('description').eql(group.description);
                done();
            });
    });
});
