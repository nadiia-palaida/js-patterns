var Button = /** @class */ (function () {
    function Button(height, background, border, color, borderRadius) {
        if (height === void 0) { height = 0; }
        if (background === void 0) { background = 'none'; }
        if (border === void 0) { border = 'none'; }
        if (color === void 0) { color = 'black'; }
        if (borderRadius === void 0) { borderRadius = 0; }
        this.height = height;
        this.background = background;
        this.border = border;
        this.color = color;
        this.borderRadius = borderRadius;
    }
    return Button;
}());
var ButtonBuilder = /** @class */ (function () {
    function ButtonBuilder() {
        this.reset();
    }
    ButtonBuilder.prototype.reset = function () {
        this.button = new Button();
    };
    ButtonBuilder.prototype.addHeight = function (height) {
        this.button.height = height;
        return this;
    };
    ButtonBuilder.prototype.addBackground = function (background) {
        this.button.background = background;
        return this;
    };
    ButtonBuilder.prototype.addBorder = function (border) {
        this.button.border = border;
        return this;
    };
    ButtonBuilder.prototype.addColor = function (color) {
        this.button.color = color;
        return this;
    };
    ButtonBuilder.prototype.addBorderRadius = function (borderRadius) {
        this.button.borderRadius = borderRadius;
        return this;
    };
    ButtonBuilder.prototype.build = function () {
        var result = this.button;
        this.reset();
        return result;
    };
    return ButtonBuilder;
}());
var DirectorButton = /** @class */ (function () {
    function DirectorButton() {
    }
    DirectorButton.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    DirectorButton.prototype.buildEmptyButton = function () {
        return this.builder.addHeight(50)
            .addBackground('transparent')
            .addBorder('1px solid black')
            .addColor('black')
            .addBorderRadius(8)
            .build();
    };
    DirectorButton.prototype.buildFullButton = function () {
        return this.builder.addHeight(50)
            .addBackground('black')
            .addColor('white')
            .addBorderRadius(8)
            .build();
    };
    return DirectorButton;
}());
var directorBtn = new DirectorButton();
var builderBtn = new ButtonBuilder();
directorBtn.setBuilder(builderBtn);
var btn1 = directorBtn.buildEmptyButton();
var btn2 = directorBtn.buildFullButton();
var btn3 = builderBtn.addHeight(20)
    .addBackground('red')
    .addColor('orange')
    .build();
console.log('btn1', btn1);
console.log('btn2', btn2);
console.log('btn3', btn3);
