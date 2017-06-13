const Browser = require('zombie');
var expect = require('chai').expect;
var assert = require('assert');

var app = require('../index.js');

Browser.localhost('localhost', 4000);
