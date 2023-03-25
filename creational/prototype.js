var Button = /** @class */ (function () {
    function Button(height, background, border) {
        if (border === void 0) { border = 'none'; }
        this.height = height;
        this.background = background;
        this.border = border;
    }
    Button.prototype.clone = function () {
        return new Button(this.height, this.background, this.border);
    };
    Button.prototype.createDomEl = function () {
        return "<button style=\"height: ".concat(this.height, "px; background: ").concat(this.background, "; border: ").concat(this.border, ";\"></button>");
    };
    return Button;
}());
var btnPrototype = new Button(50, '#fff', '1px solid #000');
var btn1 = btnPrototype.clone();
var btn2 = btnPrototype.clone();
var btn3 = btnPrototype.clone();
btn3.height = 70;
btn3.border = 'none';
console.log('btn1 element', btn1);
console.log('btn2 element', btn2);
console.log('btn3 element', btn3);
var btn1Dom = btn1.createDomEl();
var btn2Dom = btn2.createDomEl();
var btn3Dom = btn3.createDomEl();
console.log('btn1 DOM', btn1Dom);
console.log('btn2 DOM', btn2Dom);
console.log('btn3 DOM', btn3Dom);
