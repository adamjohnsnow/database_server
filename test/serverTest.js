const Browser = require('zombie');
var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var app = require('../server.js');
var expect = chai.expect;

chai.use(chaiHttp)

Browser.localhost('localhost', 4000);

describe('test server', function() {
  const browser = new Browser();

  it('can go to index', function(done){
    browser.visit('/').then(function(){
      assert.ok(browser.success);
      browser.assert.text('h1', 'SERVER');
    }).then(done)
  })

  it('sends and receives query', function(done) {
    browser.visit('/set?somekey=somevalue').then(function(){
      browser.visit('/get?key=somekey').then(function(){
        assert.ok(browser.success);
        browser.assert.text('body','somevalue');
      }).then(done)
    })
  })
})
