var test = require('tape');

var fishcake = require('../index.js');

test('fishcake is a function', function (assert) {
    assert.equal(typeof fishcake, 'function');
    assert.end();
});
