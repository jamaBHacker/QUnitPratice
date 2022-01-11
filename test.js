import {square} from './modules/myFunction.js';

QUnit.module('square');

QUnit.test("square exists", function() {
    assert.ok(square, "square exists");
});


// QUnit.test("square is a function", function() {
//     asset.ok(typeof square === 'function', "square is a function");
// });

// QUnit.test("square returns", function() {
//     assert.equal(square(2),4,"Argument of 2 returned 4")
// });