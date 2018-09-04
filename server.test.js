const chai = require('chai');
const app = require('./server');
chaiHTTP =require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;

describe('Server Module', ()=> {
    it('GET /california responds with a 200 code', (done) => {
        chai.request('http://192.168.1.12:3000')
        .get('/california')
        .end((er, res) => {
            expect(res).to.have.status(200);
            done();
        })
    })
    it('GET /chicken?r=ick&w=hello responds with chhelloen', (done) => {
        chai.request('http://192.168.1.12:3000')
        .get('/chicken?r=ick&w=hello')
        .end((err,res) => {
            expect(res.text).to.equal('chhelloen');
            done();
        })
    })
    it('GET /h_843m29r&&&@@1 respond with 200 code', (done)=> {
        chai.request('http://192.168.1.12:3000')
        .get('/h_843m29r&&&@@1')
        .end((err, res) => {
            expect(res.text).to.equal('h_843m29r&&&@@1')
            done()
        })
    })
    it('GET /ahh man to respond with 200 code', (done)=> {
        chai.request('http://192.168.1.12:3000')
        .get('/ahh man')
        .end((err, res) => {
            expect(res.text).to.equal('ahh man')
            done()
        })
    })
    it('GET /h_843m29r&&&@@1 respond with 200 code', (done)=> {
        chai.request('http://192.168.1.12:3000')
        .get('/h_843m29r&&&@@1')
        .end((err, res) => {
            expect(res.text).to.equal('h_843m29r&&&@@1')
            done()
        })
    })
})