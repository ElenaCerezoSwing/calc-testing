function Application() {

    var result = "";

    function sum(a, b) {
        result = Number(a) + Number(b);
        return result;
    }

    return {
        sum: sum
    }
};

export default Application;