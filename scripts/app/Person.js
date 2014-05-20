define(function () {
    "use strict";

    function Person() {
        this.age = 0;
        this.sex = "M";
    }

    Person.prototype = {
        constructor: Person,

        sayHello: function () {
            alert('my age is ' + this.age + ' years old');
        }
    };

    return Person;
});