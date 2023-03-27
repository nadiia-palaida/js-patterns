var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DomElFactoryAbstract = /** @class */ (function () {
    function DomElFactoryAbstract() {
    }
    return DomElFactoryAbstract;
}());
var DomElTransparentFactory = /** @class */ (function (_super) {
    __extends(DomElTransparentFactory, _super);
    function DomElTransparentFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomElTransparentFactory.prototype.createButton = function () {
        return new ButtonTransparent();
    };
    DomElTransparentFactory.prototype.createInput = function () {
        return new InputTransparent();
    };
    DomElTransparentFactory.prototype.createDiv = function () {
        return new DivTransparent();
    };
    return DomElTransparentFactory;
}(DomElFactoryAbstract));
var DomElFullFactory = /** @class */ (function (_super) {
    __extends(DomElFullFactory, _super);
    function DomElFullFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomElFullFactory.prototype.createButton = function () {
        return new ButtonFull();
    };
    DomElFullFactory.prototype.createInput = function () {
        return new InputFull();
    };
    DomElFullFactory.prototype.createDiv = function () {
        return new DivFull();
    };
    return DomElFullFactory;
}(DomElFactoryAbstract));
var ButtonTransparent = /** @class */ (function () {
    function ButtonTransparent(height, background, border, color, borderRadius) {
        if (height === void 0) { height = 50; }
        if (background === void 0) { background = 'transparent'; }
        if (border === void 0) { border = '1px solid black'; }
        if (color === void 0) { color = 'black'; }
        if (borderRadius === void 0) { borderRadius = 8; }
        this.height = height;
        this.background = background;
        this.border = border;
        this.color = color;
        this.borderRadius = borderRadius;
    }
    ButtonTransparent.prototype.handleOnClick = function () {
        this.background = 'red';
    };
    return ButtonTransparent;
}());
var ButtonFull = /** @class */ (function () {
    function ButtonFull(height, background, border, color, borderRadius) {
        if (height === void 0) { height = 50; }
        if (background === void 0) { background = 'white'; }
        if (border === void 0) { border = 'none'; }
        if (color === void 0) { color = 'black'; }
        if (borderRadius === void 0) { borderRadius = 8; }
        this.height = height;
        this.background = background;
        this.border = border;
        this.color = color;
        this.borderRadius = borderRadius;
    }
    ButtonFull.prototype.handleOnClick = function () {
        this.background = 'red';
    };
    return ButtonFull;
}());
var InputTransparent = /** @class */ (function () {
    function InputTransparent(height, background) {
        if (height === void 0) { height = 75; }
        if (background === void 0) { background = 'transparent'; }
        this.height = height;
        this.background = background;
    }
    InputTransparent.prototype.handleOnChange = function () {
        console.log('change event for transparent input');
    };
    InputTransparent.prototype.handleOnInput = function () {
        console.log('input event for transparent input');
    };
    return InputTransparent;
}());
var InputFull = /** @class */ (function () {
    function InputFull(height, background) {
        if (height === void 0) { height = 100; }
        if (background === void 0) { background = 'white'; }
        this.height = height;
        this.background = background;
    }
    InputFull.prototype.handleOnChange = function () {
        console.log('change event for full input');
    };
    InputFull.prototype.handleOnInput = function () {
        console.log('input event for full input');
    };
    return InputFull;
}());
var DivTransparent = /** @class */ (function () {
    function DivTransparent(border, background) {
        if (border === void 0) { border = '1px solid red'; }
        if (background === void 0) { background = 'transparent'; }
        this.border = border;
        this.background = background;
    }
    DivTransparent.prototype.show = function () {
        console.log('show transparent div');
    };
    DivTransparent.prototype.hide = function () {
        console.log('hide transparent div');
    };
    return DivTransparent;
}());
var DivFull = /** @class */ (function () {
    function DivFull(border, background) {
        if (border === void 0) { border = 'none'; }
        if (background === void 0) { background = 'white'; }
        this.border = border;
        this.background = background;
    }
    DivFull.prototype.show = function () {
        console.log('show full div');
    };
    DivFull.prototype.hide = function () {
        console.log('hide full div');
    };
    return DivFull;
}());
var domElTransparentFactory = new DomElTransparentFactory();
var btnTransparent = domElTransparentFactory.createButton();
var inputTransparent = domElTransparentFactory.createInput();
var divTransparent = domElTransparentFactory.createDiv();
console.log('btnTransparent', btnTransparent);
console.log('inputTransparent', inputTransparent);
console.log('divTransparent', divTransparent);
var domElFullFactory = new DomElFullFactory();
var btnFull = domElFullFactory.createButton();
var inputFull = domElFullFactory.createInput();
var divFull = domElFullFactory.createDiv();
console.log('btnFull', btnFull);
console.log('inputFull', inputFull);
console.log('divFull', divFull);
