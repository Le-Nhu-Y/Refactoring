"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (firstOperand, secondOperand, operator) {
        switch (operator) {
            case 'ADDITION':
                return firstOperand + secondOperand;
            case 'SUBTRACTION':
                return firstOperand - secondOperand;
            case 'MULTIPLICATION':
                return firstOperand * secondOperand;
            case 'DIVISION':
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
