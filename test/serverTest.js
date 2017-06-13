const Browser = require('zombie');
var expect = require('chai').expect;
var assert = require('assert');

var app = require('../index.js');

Browser.localhost('localhost', 4000);

describe('test server', function() {
  const browser = new Browser();

  it('can go to index', function(done){
    browser.visit('/').then(function(){
      assert.ok(browser.success);
      browser.assert.text('h1', 'SERVER');
    }).then(done)
  })
})
