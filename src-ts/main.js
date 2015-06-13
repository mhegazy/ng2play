System.register(['angular2/angular2', 'mycomponent'], function(exports_1) {
    var angular2_1, mycomponent_1;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_mycomponent_1) {
                mycomponent_1 = _mycomponent_1;
            }],
        execute: function() {
            angular2_1.bootstrap(mycomponent_1.MyComponent);
        }
    }
});
//# sourceMappingURL=main.js.map