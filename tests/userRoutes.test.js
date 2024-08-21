// userRoutes.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Users API', () => {
    // Test GET /users
    it('should GET all users', (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    // Test POST /users
    it('should POST a new user', (done) => {
        const user = {
            name: 'John Doe',
            email: 'john@example.com'
        };
        chai.request(app)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('name').eql(user.name);
                res.body.should.have.property('email').eql(user.email);
                done();
            });
    });
});
