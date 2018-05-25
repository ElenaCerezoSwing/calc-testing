function Application() {

    var result = "";

    function sum(a, b) {
        result = Number(a) + Number(b);
        return result;
    }
    function rest(a, b) {
        result = (Number(a) - Number(b));
        return result;
    }

    return {
        sum: sum,
        rest: rest
    }
};

export default Application;