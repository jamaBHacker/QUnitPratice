import  square from './modules/myFunction.js';
//  var QUnit = require('qunit');


QUnit.module('square');

QUnit.test("square exists", function() {
    QUnit.assert.ok(square, "square exists");
});


QUnit.test("square is a function", function() {
    QUnit.assert.ok(typeof square === 'function', "square is a function");
});

// QUnit.test("square returns", function() {
//     assert.equal(square(2),4,"Argument of 2 returned 4")
// });