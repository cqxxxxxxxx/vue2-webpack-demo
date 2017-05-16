/**
 * Created by cqx on 2017/5/16.
 */
var config = require('./config.json');

// Greeter.js
export default function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};

export var version = 1.0;