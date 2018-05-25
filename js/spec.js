import Application from "./main.js";
let app;

beforeEach(function () {
    app = Application();
});

describe("calculator machine adds", function () {

    it("really adds", function () {
        expect(app.sum(0, 0)).toBe(0);
    });



});