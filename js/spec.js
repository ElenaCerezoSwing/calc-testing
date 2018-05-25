import Application from "../main.js";
let App;

beforeEach(function () {
    app = Application();
});

describe("calculator machine adds", function () {

    it("really adds", function () {
        expect(app.sum(0, 0)).toBe(0);
    });



});