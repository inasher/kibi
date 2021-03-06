let angular = require('angular');
let expect = require('expect.js');
let ngMock = require('ngMock');
let _ = require('lodash');

describe('Vislib Vis Types Test Suite', function () {
  let visTypes;
  let visFunc;

  beforeEach(ngMock.module('kibana'));
  beforeEach(ngMock.inject(function (Private) {
    visTypes = Private(require('ui/vislib/visualizations/vis_types'));
    visFunc = visTypes.histogram;
  }));

  it('should be an object', function () {
    expect(_.isObject(visTypes)).to.be(true);
  });

  it('should return a function', function () {
    expect(typeof visFunc).to.be('function');
  });
});
