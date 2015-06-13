var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(['angular2/angular2'], function(exports_1) {
    var angular2_1;
    var Tooltip;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            }],
        execute: function() {
            Tooltip = (function () {
                function Tooltip() {
                }
                Tooltip.prototype.show = function () {
                    console.log(this.text);
                };
                Tooltip = __decorate([
                    angular2_1.Directive({
                        selector: '[tooltip]',
                        properties: [
                            'text: tooltip'
                        ],
                        hostListeners: {
                            mouseover: 'show()'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tooltip);
                return Tooltip;
            })();
            exports_1("Tooltip", Tooltip);
        }
    }
});
//# sourceMappingURL=tooltip.js.map