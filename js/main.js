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
    function mult(a, b) {
        result = (Number(a) * Number(b));
        return result;
    }
    function divide(a, b) {
        result = (Number(a) / Number(b));
        return result;
    }

    return {
        sum: sum,
        rest: rest,
        mult: mult,
        divide: divide
    }
};

export default Application;