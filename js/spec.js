import Application from "./main.js";
let app;

beforeEach(function () {
    app = Application();
});

describe("calculator machine functions works", function () {

    it("really adds", function () {
        expect(app.sum(0, 0)).toBe(0);
        expect(app.sum(1, 0)).toBe(1);
        expect(app.sum(-1, 0)).toBe(-1);
        expect(app.sum(-1, -1)).toBe(-2);
        expect(app.sum(1.0, 0)).toBe(1);
        expect(app.sum(1.0, 1.2)).toBe(2.2);
        expect(app.sum(1.03, 1.2)).toBe(2.23);
        expect(app.sum(1.03, 1.21)).toBe(2.24);
        expect(app.sum(1.03, 1.97)).toBe(3);
        expect(app.sum("1.03", 1.97)).toBe(3);
    });
    it("really rests", function () {
        expect(app.rest(0, 0)).toBe(0);
        expect(app.rest(1, 0)).toBe(1);
        expect(app.rest(-1, 0)).toBe(-1);
        expect(app.rest(-1, -1)).toBe(0);
        expect(app.rest(1.0, 0)).toBe(1);
        expect(app.rest("1", 1)).toBe(0);
        expect(app.rest("-1", 1)).toBe(-2);
        // casos para estudiar después
        // expect(app.rest(1.0, 1.2)).toBe(-0.2);
        // expect(app.rest(1.03, 1.01)).toBe(0.02);
        // en algún momento necesitaremos un toFixed();
    });
    it("really multiplies", function () {
        expect(app.mult(0, 0)).toBe(0);
        expect(app.mult(1, 0)).toBe(0);
        // a depurar en el futuro porque pide el signo del cero 
        expect(app.mult(-1, 0)).toBe(-0);
        expect(app.mult(-1, -1)).toBe(1);
        expect(app.mult(1.0, -1)).toBe(-1);
        expect(app.mult("1", 1)).toBe(1);
        expect(app.mult("-1", 1)).toBe(-1);
        // casos para estudiar después
        // expect(app.rest(1.0, 1.2)).toBe(-0.2);
        // expect(app.rest(1.03, 1.01)).toBe(0.02);
        // en algún momento necesitaremos un toFixed();
    }); it("really divides", function () {
        expect(app.divide(0, 0)).toBe(NaN);
        expect(app.divide(1, 0)).toBe(Infinity);
        expect(app.divide(-1, 0)).toBe(-Infinity);
        expect(app.divide(-1, -1)).toBe(1);
        expect(app.divide(1.0, -1)).toBe(-1);
        expect(app.divide("1", 1)).toBe(1);
        expect(app.divide("-1", 2)).toBe(-0.5);
        // casos para estudiar después
        // expect(app.divide(1.0, 1.2)).toBe(-0.2);
        // expect(app.divide(1.03, 1.01)).toBe(0.02);
        // en algún momento necesitaremos un toFixed();
    });



});