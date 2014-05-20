requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app'
    }
});

require(["person"], function (person) {
    var bob = new Person();
    bob.sayHello();
});