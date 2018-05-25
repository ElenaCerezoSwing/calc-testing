function Application() {

    var result = "";

    function sum(a, b) {
        result = a + b;
        return result;
    }

    return {
        sum: sum
    }
};

export default Application;