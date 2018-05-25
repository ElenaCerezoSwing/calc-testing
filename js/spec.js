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
    });



});