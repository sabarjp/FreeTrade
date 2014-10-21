requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-1.10.2.min',
        jqueryui: 'jquery-ui-1.10.3.custom.min'
    }
});

define(function (require) {
    "use strict";

    var Person = require("app/Person");
    var $ = require("jquery");

    var bob = new Person();
    bob.age = 9;
    bob.sayHello();

    var alice = new Person();
    alice.sayHello();
});