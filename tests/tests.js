const config = require("../server/models/knexfile");
const knex = require("knex")(config);
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = 'http://localhost:3000/api/v1/motorcycles';

chai.use(chaiHttp);

describe('motorcycles', () => {
    before((done) => {
        // run migrations
        knex.migrate.latest({directory: './server/models/migrations'})
        // run seeds
        .then(() => knex.seed.run({directory: './server/models/seeds'}))
        .then(() => done());
    });

    it('should return all brands', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(3);
        res.body[0].should.have.property('id');
        res.body[0].should.have.property('brand');
        res.body[0].should.have.property('logo');
        done();
        });
    });
});

describe('models', () => {
    it('should return all models for the brand Yamaha',  (done) => {
        chai.request(server)
        .get('/yamaha')
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(2);
        res.body[0].should.have.property('model');
        res.body[0].should.have.property('brand');
        res.body[0].brand.should.equal('Yamaha');
        done();
        });
    });

    it('should return all models for the brand Honda',  (done) => {
        chai.request(server)
        .get('/honda')
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(2);
        res.body[0].should.have.property('model');
        res.body[0].should.have.property('brand');
        res.body[0].brand.should.equal('Honda');
        done();
        });
    });
})

describe('specific model', () => {
    it('should return Yamaha R1',  (done) => {
        chai.request(server)
        .get('/yamaha/r1')
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        res.body[0].should.have.property('model');
        res.body[0].model.should.equal('R1');
        res.body[0].should.have.property('brand');
        res.body[0].brand.should.equal('Yamaha');
        done();
        });
    });
})

describe('add/update model', () => {
    it('should add Yamaha R7 to the Yamaha model list',  (done) => {
        chai.request(server)
        .post('/yamaha')
        .send({
            "model": "R7",
            "size": "750cc",
            "side_r": "url",
            "action": "url",
            "display": "url"
        })
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(3);
        res.body[0].should.have.property('model');
        res.body[2].model.should.equal('R7');
        res.body[0].should.have.property('brand');
        res.body[0].brand.should.equal('Yamaha');
        done();
        });
    });

    it('should update Yamaha R7 engine size',  (done) => {
        chai.request(server)
        .put('/yamaha/r7')
        .send({
            "model": "R7",
            "size": "749cc",
            "side_r": "url",
            "action": "url",
            "display": "url"
        })
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        res.body[0].should.have.property('model');
        res.body[0].model.should.equal('R7');
        res.body[0].should.have.property('size');
        res.body[0].size.should.equal('749cc');
        done();
        });
    });
})