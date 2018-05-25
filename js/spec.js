import Application from "./main.js";
let app;

beforeEach(function () {
    app = Application();
});

describe("calculator machine adds", function () {

    it("really adds", function () {
        expect(app.sum(0, 0)).toBe(0);
        expect(app.sum(1, 0)).toBe(1);
        expect(app.sum(-1, 0)).toBe(-1);
        expect(app.sum(1.0, 0)).toBe(1);
        expect(app.sum(1.0, 1.2)).toBe(2.2);
        expect(app.sum(1.03, 1.2)).toBe(2.23);
        expect(app.sum(1.03, 1.21)).toBe(2.24);
        expect(app.sum(1.03, 1.97)).toBe(3);
        expect(app.sum("1.03", 1.97)).toBe(3);
        expect(app.sum("a", 1.97)).toBe(3);


    });



});