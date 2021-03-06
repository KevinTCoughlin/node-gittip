/**
 * Tests for Gittip's REST API
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/)
 */

var Gittip = require('..')
  , should = require('should')
  , request = require('supertest')
  , request = request('https://gratipay.com/')
  , g;

beforeEach(function(){
  g = new Gittip();
});

describe('Gittip API - Paydays', function () {
  this.timeout(15000);
    it('responds with JSON', function (done) {
      request
        .get(g.defaults.paydaysURL)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.header['content-type'].should.eql('application/json');
          res.body.should.exit;
          done();
        });
    });
});

describe('Gittip API - User Public Data', function () {
  this.timeout(15000);
    it('responds with JSON', function (done) {
      request
        .get('/~kevintcoughlin/public.json')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.header['content-type'].should.eql('application/json');
          res.body.should.exit;
          done();
        });
    });
});
